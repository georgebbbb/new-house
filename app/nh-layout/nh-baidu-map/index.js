angular.module('nhLayout').directive('nhBaiduMap', function() {
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			address: '=',
			point: '=',

		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A,E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'nh-layout/nh-baidu-map/index.html',
		replace: true,
		transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

		

			// 百度地图API功能
			var map = new BMap.Map('map');
			var point = new BMap.Point(121.48, 31.22);
			map.centerAndZoom(point, 12);
			// 创建地址解析器实例
			var myGeo = new BMap.Geocoder();
			// 将地址解析结果显示在地图上,并调整地图视野
			console.log($scope.address);
			myGeo.getPoint($scope.address, function(point) {
				if (point) {

					scope.point=point;
					map.centerAndZoom(point, 16);
					map.addOverlay(new BMap.Marker(point));
				} else {
					alert("您选择地址没有解析到结果!");
				}
			}, "上海市");


		}
	};
});