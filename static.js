var express = require('express');
var fs = require('fs');
var path = require('path');

module.exports = function (staticPath) {

  var router =  express.Router();

  // serve static files
  router.use(express.static(staticPath));
  
  // for pushState
  router.use(function (req, res) {
    fs.createReadStream(path.join(staticPath, 'index.html')).pipe(res);
  });
  return router;
};
