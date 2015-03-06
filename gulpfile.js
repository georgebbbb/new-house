var combiner = require('stream-combiner2');
var path = require('path');
var glob = require('glob');
var gulp = require('gulp');
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var less = require('gulp-less');
var ngAnnotate = require('gulp-ng-annotate');
var cache = require('gulp-cached');
var remember = require('gulp-remember');
var headerfooter = require('gulp-headerfooter');
var htmlReplace = require('gulp-html-replace');
var through = require('through2');
var del = require('del');
var express = require('express');


var config = require('./config');

var source = {
  img: [
    'app/images/**/*',
  ],
  fonts: [
    'app/fonts/**/*',
    'node_modules/bootstrap/dist/fonts/*',
    'node_modules/font-awesome/fonts/*'
  ],
  js: {
    app: [
      'app/**/*.js'
    ],
    vendor: [ 
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/lodash/dist/lodash.min.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-dragdrop/src/angular-dragdrop.min.js',
      'node_modules/angular-file-service/dist/angular-file-service.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/ngSocket/dist/ngSocket.js',
      'node_modules/textangular/dist/textAngular-rangy.min.js',
      'node_modules/textangular/dist/textAngular-sanitize.min.js',
      'node_modules/textangular/dist/textAngular.min.js',
      'node_modules/ng-file-upload/dist/angular-file-upload.min.js',
      'node_modules/angular-validation/dist/angular-validation.min.js',
      'node_modules/angular-validation/dist/angular-validation-rule.min.js',
      'lib/**/*.js'
    ],
  },
  css: [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/textangular/src/textAngular.css'
  ],
  less: [
    'app/**.less',
    'app/**/*.less'
  ],
  html: [
    'app/**/*.html'
  ]
};

// CLEAN
gulp.task('clean', function (cb) {
  del('dist', cb);
});

// JS:APP
gulp.task('build:js:app', function () {
  var jsBuilder = combiner.obj([
      ngAnnotate(),
      headerfooter.header(';(function(){\n"use strict"\n'),
      through.obj(function (file, enc, next) {
        if(file.path.match(path.join('cg-config','index.js'))) {
          var envConfig = 'config = ' + JSON.stringify(config) + ';';
          var contents = file.contents.toString().replace(
            '//# envConfig', 
            envConfig
          );
          file.contents = new Buffer(contents);
        }
        this.push(file);
        next();
      }),
      headerfooter.footer('})();'),
  ]);
  if(config.devMode) {
    task = combiner.obj([
      gulp.src(source.js.app),
      cache('js:app'),
      jsBuilder,
      gulp.dest('dist/scripts')
    ]);
  } else {
    task = combiner.obj([
      gulp.src(source.js.app),
      jsBuilder,
      uglify(),
      concat('app.js'),
      gulp.dest('dist/scripts/'),
    ]);
  }

  task.on('error', function (err) {
    util.log(err);
  });
  return task;
});

// JS:VENDOR
gulp.task('build:js:vendor', function () {
  if(config.devMode) {
    return gulp.src(source.js.vendor)
    .pipe(gulp.dest('dist/scripts/lib'));
  } else {
    return gulp.src(source.js.vendor)
    .pipe(through.obj(function (file, enc, next) {
      var contents = file.contents;
      file.contents = new Buffer(contents.toString().replace(/\/\/# sourceMapping.*/g, ''));
      next(null, file);
    }))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/scripts/'));
  }
});
gulp.task('build:js:vendor:sourcemaps', function () {
  if(config.devMode) {
    var sourceMaps = source.js.vendor.reduce(function (prev, path) {
      var files;
      path = path.replace('.js', '*.map');
      files = glob.sync(path);
      prev = prev.concat(files);
      return prev;
    }, []);
    gulp.src(sourceMaps)
    .pipe(gulp.dest('dist/scripts/lib'));
  }
});

gulp.task('build:js', [
  'build:js:app',
  'build:js:vendor',
  'build:js:vendor:sourcemaps'
]);

// CSS & LESS
gulp.task('build:css', function () {
  return gulp.src(source.css)
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('dist/styles/'));
});
gulp.task('build:less', function () {
  var combined = combiner.obj([
    gulp.src(source.less),
    cache('less'),
    less(),
    // change the extname back to less for remember.forget
    rename({
      extname: '.less'
    }),
    remember('less'),
    concat('app.css'),
    gulp.dest('dist/styles/')
  ]);
  combined.on('error', util.log);
  return combined;
});

// BUILD HTML
gulp.task('copy:html', function () {
  return gulp.src(source.html)
  .pipe(cache('html'))
  .pipe(gulp.dest('dist'));
});
gulp.task('build:html', ['copy:html'], function () {
  var jsVendor = 'scripts/vendor.js';
  var jsApp = 'scripts/app.js';

  if (config.devMode) {
    jsVendor = source.js.vendor.reduce(function (prev, files) {
      var fileList = glob.sync(files).map(function (filePath) {
        return path.join('scripts', 'lib', path.basename(filePath));
      });
      prev = prev.concat(fileList);
      return prev;
    }, []);
    jsApp = source.js.app.reduce(function (prev, fileGlob) {
      console.log(fileGlob);
      var files = glob.sync(fileGlob).map(function (filePath) {
        var file = filePath.split(path.sep);
      
     var list=  file[0].split('/');
     list[0]='scripts';
    list= list.reduce(function(a,b){
      return a+'/'+b;
     });
    file[0]=list;

        return path.join.apply(path, file);
      });
      prev = prev.concat(files);
      return prev;
    }, []);
    // make module definition appears earlier than directive definition
    jsApp.sort(function (a, b) {
      var folderLength = [a, b].map(function (filePath) {
        return path.dirname(filePath).split(path.sep).length;
      });
      return folderLength[0] - folderLength[1];
    });
  }

  gulp.src('dist/index.html')
    .pipe(htmlReplace({
      vendor: jsVendor,
      app: jsApp
    }))
    .pipe(gulp.dest('dist'));
});

// BUILD OTHERS
gulp.task('build:img', function () {
  return gulp.src(source.img).pipe(gulp.dest('dist/images'));
});
gulp.task('build:fonts', function () {
  return gulp.src(source.fonts).pipe(gulp.dest('dist/fonts'));
});

// BUILD & RELEASE
gulp.task('build', [
  'build:img',
  'build:fonts',
  'build:js',
  'build:css',
  'build:less',
  'build:html'
]);

// WATCH
gulp.task('watch', ['build'], function () {
  var watchList = [
    'less',
    'js:app',
    'html'
  ];
  var watchers = watchList.map(function (target) {
    var splitted = target.split(':');
    var location = source[splitted[0]];
    if(splitted[1] !== undefined) {
      location = location[splitted[1]];
    }
    var watcher =  gulp.watch(location, ['build:'+target]);
    watcher.on('error', util.log);
    watcher.on('change', function (msg) {
      if(msg.type === 'deleted') {
        if(cache.caches[target]) {
          delete cache.caches[target][msg.path];
        }
        remember.forget(target, msg.path);
      }
    });
    return watcher;
  });
});

// SERVE
gulp.task('serve', function () {
  var app = express();

  app.use('/qsales', require('./static')('dist'));

  app.listen(8080);
  util.log('Serve static files at localhost:8080');

  process.on('uncaughtException', function(){
    console.error(arguments);
  });
});

// RUN
gulp.task('run', ['watch', 'serve']);

// DEFAULT
gulp.task('default', ['run']);

