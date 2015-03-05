angular.module('nhHouse').controller('nhHouseAdd', ['$scope', '$modal', function($scope, $modal) {


	$scope.house = {};

	$scope.openUpload = function() {
		var modalInstance = $modal.open({
			templateUrl: 'nh-house/nh-house-add/nh-house-upload-image/index.html',
			controller: 'nhHouseUploadImage',
		});
	}
	var openMap = function(input) {
		var modalInstance = $modal.open({
			templateUrl: 'nh-house/nh-house-add/nh-house-baidu-map/index.html',
			controller: 'nhHouseBaiduMap',
			resolve: {
				address: function() {
					return input;
				}
			}
		});
	}

	$scope.openSalesOfficesAddressMap = function() {
		console.log(this.house.salesOfficesAddress)
		openMap(this.house.salesOfficesAddress);
	}



	$scope.photos = [{
			id: 'p1',
			'title': 'A nice day!',
			src: "http://lorempixel.com/300/400/"
		}, {
			id: 'p2',
			'title': 'Puh!',
			src: "http://lorempixel.com/300/400/sports"
		}, {
			id: 'p3',
			'title': 'What a club!',
			src: "http://lorempixel.com/300/400/nightlife"
		}, {
			id: 'p4',
			'title': 'What a club!',
			src: "images/pic01.jpg"
		}, {
			id: 'p5',
			'title': 'What a club!',
			src: "images/pic02.jpg"
		}, {
			id: 'p4',
			'title': 'What a club!',
			src: "images/pic01.jpg"
		}, {
			id: 'p5',
			'title': 'What a club!',
			src: "images/pic02.jpg"
		}, {
			id: 'p4',
			'title': 'What a club!',
			src: "images/pic01.jpg"
		}, {
			id: 'p5',
			'title': 'What a club!',
			src: "images/pic02.jpg"
		},

	];

}]);