var SparkMD5 = require('spark-md5');
var base64 = require('base64-arraybuffer').encode;
angular.module('angular.file', [])
    .factory('fileOperator', ['$window', '$q', function ($window, $q) {
        function FileOperator (file, maxChunkSize) {
            this.file = file;
            this.fileSize = (file && file.size) || 0;
            this.messages = [];
            // this property will only affect MD5 calculation
            this.maxChunkSize = maxChunkSize || 1048576;
        }
        FileOperator.prototype.read = function (start, end) {
            var that = this;
            var fileReader = new $window.FileReader();
            return $q(function (resolve, reject) {
                var fileChunk;
                if(!that.file) {
                    return reject(new Error('read','invalid file instance'));
                }
                // bind onloadend handler 
                fileReader.onloadend = function (msg) {
                    resolve(fileReader.result);
                };
                fileReader.onerror = function (msg) {
                    reject(new Error('read', msg));
                };
                fileReader.onabort = function (msg) {
                    reject(msg);
                };

                // use slice.appy to handle three situation:
                // - both `start` and `end` are not given
                // - only `start` is given
                // - both `start` and `end` are given
                fileChunk = $window.File.prototype.slice.apply(
                    that.file, 
                    [start, end]
                );

                fileReader.readAsArrayBuffer(fileChunk);
            });
        };
        FileOperator.prototype.abort = function () {
            fileReader.abort();
        };
        FileOperator.prototype.getArrayBuffer = function (start, length) {
            var params = this.correctRange(start, length);
            start = params.start;
            length = params.length;
            return this.read(start, start + length);
        };
        FileOperator.prototype.getUint8Array = function (start, length) {
            return this.getArrayBuffer(start, length).then(function (array) {
                return new Uint8Array(array);
            });
        };
        FileOperator.prototype.getBase64 = function (start, length) {
            return this.getArrayBuffer(start, length).then(function (array) {
                return base64(array);
            });
        };
        FileOperator.prototype.getMd5 = function (start, length) {
            var params = this.correctRange(start, length);
            start = params.start;
            length = params.length;

            // if require length is acceptable, get MD5 directly
            if(length < this.maxChunkSize) {
                return this.getArrayBuffer(start, length).then(function (data) {
                    return $q.when(SparkMD5.ArrayBuffer.hash(data));
                });
            }
            // otherwise calculate MD5 incrementally
            return this.incMd5(start, length);
        };
        FileOperator.prototype.incMd5 = function (start, length) {
            var that = this;
            var chunkSize = that.maxChunkSize;
            var fileSize = that.fileSize;
            var spark = new SparkMD5.ArrayBuffer();

            var deferred = $q.defer();

            calculate(start, function (err, result) {
                if (err) {
                    return deferred.reject(err);
                }
                return deferred.resolve(result);
            });

            function calculate (now, done) {
                deferred.notify(now/fileSize);
                if(now > fileSize) {
                    return done(null, spark.end());
                }
                // get arraybuffer
                that.getArrayBuffer(now, chunkSize).then(function (array) {
                    spark.append(array);
                    return calculate(now + chunkSize, done);
                }, function (msg) {
                    return done(msg);
                });
            }

            return deferred.promise;

        };
        FileOperator.prototype.correctRange = function (start, length) {
            var fileSize = this.fileSize;
            start = (start && (start > 0)) ? start : 0;
            length = (length && (start + length < fileSize)) ? length : fileSize - start;
            return {
                start: start,
                length: length
            };
        };

        return function ServiceConstructor(file, maxChunkSize) {
            // When invoke this service, it will return a function,
            // service user can use it as a file loader, which will
            // return a file operator instance 
            return new FileOperator(file, maxChunkSize);
        };

    }]);
