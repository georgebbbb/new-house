// Module definition
var app = angular.module('cgUploader', [
  'ngSocket',
  'angular.file',
  'cgLayout',
  'cgBackend',
  'cgConfig',
  'cgUtil'
]).controller('cgUploaderController', function (
  $scope,
  $location
) {
  $scope.$on('uploadSuccess',function(event){
    $location.url('mapping');
  });

});
