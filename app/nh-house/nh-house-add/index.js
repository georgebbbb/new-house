angular.module('nhHouse').controller('nhHouseAdd', ['$scope', '$validation', '$http','formlyVersion', function($scope, $validation, $http,formlyVersion) {



    var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = {
      name: 'Kent C. Dodds',
      url: 'https://twitter.com/kentcdodds'
    };
    vm.exampleTitle = 'Custom controller & Link';
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };

    vm.model = {};
    
    vm.fields = [
      {
        key: 'text',
        type: 'input',
        templateOptions: {
          label: 'Check the console',
          placeholder: 'Controller and Link at the type level'
        }
      }
      
    ];
   
  function onSubmit() {
      alert(JSON.stringify(vm.model), null, 2);
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
			templateUrl: 'nh-layout/nh-input/simpleAndMap.html',
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

angular.module('nhHouse').controller('ParentCtrl', function($scope) {


	$scope.logThisAndScope = function() {
		console.log(this, $scope)
	}



});
angular.module('nhHouse').controller('ChildCtrl', function() {



});