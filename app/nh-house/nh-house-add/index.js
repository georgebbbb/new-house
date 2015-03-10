angular.module('nhHouse').controller('nhHouseAdd', ['$scope', '$modal', '$validation', '$http', function($scope, $modal, $validation, $http) {


	//this code is disgust and dirty
	$scope.openUpload = function() {
			var modalInstance = $modal.open({
				templateUrl: 'nh-house/nh-house-add/nh-house-upload-image/index.html',
				controller: 'nhHouseUploadImage',
			});
		}
	//this code is disgust and dirty
	$scope.openMap = function(input) {
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


	

//fireEvent
angular.element('#test').bind('click',function(){

	 angular.element('#test2')[0].dispatchEvent(evt); 
});

 var    evt = document.createEvent("MouseEvents");  
    evt.initMouseEvent("click", true, true, window,  
      0, 0, 0, 0, 0, false, false, false, false, 0, null);  
  
   

	//this code is disgust and dirty
	$scope.house = {
		name: '',

		property: 'zhuzhai',
		address: 'hehe',
		preferential: '23413',
	
		reward: '212',
		contact: 'sdad',
		communicate: '1131',
		basic: 'wewq'
	}
	$scope.houseConfig = {
		name: {
			templateUrl: 'nh-layout/nh-input/simple.html',
			lable: '楼盘名称'
		},
		property: {
			templateUrl: 'nh-layout/nh-input/simple.html',
			lable: '物业类别'
		},
		price: {
			lable: '均价'
		},
		address: {
			templateUrl: 'nh-layout/nh-input/simpleAndMap.html',
			lable: '楼盘地址'

		},
		salesOffices: {
			lable: '售楼处地址',
		},

		preferential: {
			lable: '购房优惠'
		},
		reward: {
			lable: '奖励'
		},
		saw: {
			lable: '带看有效期'
		},
		manage: {
			lable: '项目经理'
		},
		contact: {
			lable: '联系方式'
		},
		cooperate: {
			lable: '合作有效期'
		},
		basic: {
			templateUrl: 'nh-layout/nh-input/editText.html',
			lable: '基本信息'
		},
		rule: {
			templateUrl: 'nh-layout/nh-input/editText.html',
			lable: '合作规则'
		},
		point: {
			templateUrl: 'nh-layout/nh-input/editText.html',
			lable: '楼盘卖点'
		},
		target: {
			templateUrl: 'nh-layout/nh-input/editText.html',
			lable: '目标客户'
		},
		skill: {
			templateUrl: 'nh-layout/nh-input/editText.html',
			lable: '拓客技巧'
		},
		defaultConfig: {
			templateUrl: 'nh-layout/nh-input/simple.html'
		},
	}

	//this code is disgust and dirty
	var houseProps =Object.keys($scope.houseConfig).filter(function(elem){
		return elem!='defaultConfig';
	});

	//this code is disgust and dirty
	$scope.houseProps = houseProps.map(function(elem) {
		
					var element = {};
		element.name = elem;
		element.lable = $scope.houseConfig[elem] ? $scope.houseConfig[elem].lable : '';
		element.value = $scope.house[elem];

		var temp = $scope.houseConfig[elem];

		if (angular.isDefined(temp) && angular.isDefined(temp.templateUrl)) {
			//console.log($scope.houseConfig['defaultConfig'].templateUrl);

			element['templateUrl'] = temp.templateUrl;

		} else {
			element['templateUrl'] = 'nh-layout/nh-input/simple.html';

		}

		return element;

		

	});



	$scope.photos = [{
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