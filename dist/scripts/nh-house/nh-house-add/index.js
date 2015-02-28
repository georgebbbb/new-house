;(function(){
"use strict"
angular.module('nhHouse').controller('nhHouseAdd', ['$scope', function($scope){

        var vm = $scope.vm = {
            htmlSource: "",
            showErrorType: 1
        };

        vm.saveEntity = function (form) {
            //do somethings for bz
            alert("Save Successfully!!!");
        };

        //每个表单的配置，如果不设置，默认和全局配置相同
        vm.validateOptions = {
            blurTrig: true
        };
	
}]);})();