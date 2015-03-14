angular.module('nhCommon').directive('nhTemplateRepeat', function($parse, $modal) {
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope:true,
		// scope: {
		// 	data: '=',
		// 	dataConfig: '=config'
		// }, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment ng-include="dataProp.templateUrl"
		template: ' <div ndata-ng-repeat = "dataProp in dataProps"  data-ng-include="nh-layout/nh-input/simple.html"> </div>',
		// templateUrl: '',
		replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		controller: function($scope, iElm, iAttrs, controller) {
			console.log(iAttrs['data']);





			$scope.$watch('data', function(data) {

				var dataProps;
				if (angular.isDefined($scope.data)) {
					if (angular.isDefined($scope.dataConfig)) {

						dataProps = Object.keys($scope.dataConfig).filter(function(elem) {
							return elem != 'defaultConfig';
						});


						$scope.dataProps = dataProps.map(function(elem) {

							var element = {};
							element.name = elem;
							element.lable = $scope.dataConfig[elem] ? $scope.dataConfig[elem].lable : '';
							element.value = $scope.data[elem];

							var temp = $scope.dataConfig[elem];

							if (angular.isDefined(temp) && angular.isDefined(temp.templateUrl)) {
								//console.log($scope.houseConfig['defaultConfig'].templateUrl);

								element['templateUrl'] = temp.templateUrl;

							} else {
								element['templateUrl'] = 'nh-layout/nh-input/simple.html';

							}

							return element;
						});
						console.log($scope.dataProps);
					} else {
						throw ('config need a value');
					}

				}


			})



		}
	};
});