angular.module('nhCommon').directive('nhMap', function($parse,$modal) {
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: true, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		replace: true,
		//   transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {


			iElm.bind('click', function() {

				$scope.$apply(function() {

					var model = $parse(iAttrs['nhMap']);
					var input =model($scope);	
						var modalInstance = $modal.open({
							templateUrl: 'nh-house/nh-house-add/nh-house-baidu-map/index.html',
							controller: 'nhHouseBaiduMap',
							resolve: {
								address: function() {
									return input;
								}
							}
						});
					



					// console.log($scope);
					// console.log();
					// console.log($scope['houseProp']);

				});

			});



		}
	};
});