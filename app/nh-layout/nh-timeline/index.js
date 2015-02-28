//example:
			// $scope.follows = [
			// {
			// 	day:"2222",
			// 	contents:[
			// 	{
			// 		source:"太平洋",
			// 		time:"123",
			// 		name:"哈哈哈",
			// 		text :"看了",
			// 		state :"看了",

			// 	},
			// 	{
			// 		source:"太平洋",
			// 		time:"123",
			// 		name:"哈哈哈",
			// 		text :"看了",
			// 		state :"看了",

			// 	}
			// 	]
			// },
			// 	{
			// 	day:"2222222",
			// 	contents:[
			// 	{
			// 					source:"太平洋",
			// 		time:"123",
			// 		name:"哈哈哈",
			// 		text :"看了",
			// 		state :"看了",

			// 	},
			// 	{
			// 					source:"太平洋",
			// 		time:"123",
			// 		name:"哈哈哈",
			// 		text :"看了",
			// 		state :"看了",
			// 	}
			// 	]
			// }


			// ]	

angular.module('nhLayout').directive('nhTimeline',  function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: {follows :"=follows"}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		 templateUrl: 'nh-layout/nh-timeline/index.html',
		replace: true,
		 transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

		}
	};
});