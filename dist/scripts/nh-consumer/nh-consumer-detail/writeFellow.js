;(function(){
"use strict"

angular.module('nhConsumer').controller('nhConsumerWriteFellow', ["$scope", "$modalInstance", function ($scope, $modalInstance) {


  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);})();