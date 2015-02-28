;(function(){
"use strict"
// Module definition
var app = angular.module('cgUploader', [
  'ngSocket',
  'angular.file',
  'cgLayout',
  'cgBackend',
  'cgConfig',
  'cgUtil'
]).controller('cgUploaderController', ["$scope", "$location", function (
  $scope,
  $location
) {
  $scope.$on('uploadSuccess',function(event){
    $location.url('mapping');
  });

}]);
})();