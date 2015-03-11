angular.module('nhHouse')




.controller('nhHouseBaiduMap', ['$scope','$modalInstance','address', function($scope, $modalInstance,address){




$scope.address=address;
console.log($scope.address);
$scope.point="122";            

  $scope.ok = function () {
    console.log($scope.point);
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
	
}]);