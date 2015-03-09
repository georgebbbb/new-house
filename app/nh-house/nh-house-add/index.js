angular.module('nhHouse').controller('nhHouseAdd', ['$scope', '$modal', '$validation', function($scope, $modal, $validation) {


	$scope.house = {

		name: 1
	};

	console.log($validation);

	$scope.house.checkValid = $validation.checkValid;

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


	$scope.house = {
		name: '',

		property: 'zhuzhai',
		address: 'hehe',
		preferential: '23413',
		commission: '20',
		reward: '212',
		contact: 'sdad',
		communicate: '1131',
		basic: 'wewq'
	}
	$scope.houseConfig = {
		name: {
			templateUrl: 'nh-layout/nh-input/simple.html'
		},
		address: {
			templateUrl: 'nh-layout/nh-input/simpleAndMap.html'
		},
		property: {
			templateUrl: 'nh-layout/nh-input/simple.html'
		},
		preferential: 12123,
		
		reward: {},
		contact: {},
		communicate: {templateUrl: 'nh-layout/nh-input/simpleAndMap.html'},
		basic: {},
		defaultConfig: {
			templateUrl: 'nh-layout/nh-input/simple.html'
		},
	}
		



	$scope.houseProps = Object.keys($scope.house).map(function(elem){
		var element ={};
		element.name=elem;
		element.lable=elem;

		var temp = $scope.houseConfig[elem];
			
		if (angular.isDefined(temp)&&angular.isDefined(temp.templateUrl)) {
			//console.log($scope.houseConfig['defaultConfig'].templateUrl);
			
			element['templateUrl']=temp.templateUrl;
		
		} else {
			element['templateUrl']='nh-layout/nh-input/simple.html';
			
		}
		
		return element;
	});
   
	console.log($scope.houseProps);


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