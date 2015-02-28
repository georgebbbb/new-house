
//******************************example
// $scope.stages=[{name:'报备未确认',time:"112"},{name:'报备有效',time:123},{name:'带看',time:123},{name:'认购',time:123},{name:'签约',time:123},{name:'结佣',time:123}];

// $scope.currentSatge="带看";
angular.module('nhLayout').directive('nhStages', function() {
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			stages: "=stages",
			current: "=current"
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'nh-layout/nh-stages/index.html',
		replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			// var outerWidth = iElm.outerWidth();
			// var circleWidth = 20;
			// var margin = 5;
			// var lineWidth = (outerWidth-circleWidth-margin*2)/$scope.stages.length-circleWidth-margin*4;
			// iElm.find('nh-stages-line').width(lineWidth);

			$scope.currentIndex = -1;
			$scope.startStage = $scope.stages.shift();
			$scope.stages.map(function( elem,index) {
				console.log(elem);
				if (elem.name == $scope.current) {
					$scope.currentIndex = index;
				}

				return elem;
			});
			
		}
	};
});