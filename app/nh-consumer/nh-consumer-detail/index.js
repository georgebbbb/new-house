angular.module('nhConsumer').controller('nhConsumerDetail', ['$scope','$modal', function($scope,$modal) {
  $scope.open = function (size) {
        var modalInstance = $modal.open({
      templateUrl: 'nh-consumer/nh-consumer-detail/writeFellow.html',
      controller: 'nhConsumerWriteFellow',
    });
}





$scope.stages=[{name:'报备未确认',time:"112"},{name:'报备有效',time:123},{name:'带看',time:123},{name:'认购',time:123},{name:'签约',time:123},{name:'结佣',time:123}];

$scope.currentSatge="带看";


    $scope.follows = [{
            day: "2222",
            contents: [{
                source: "太平洋",
                time: "1211111111111111111111113",
                name: "哈哈哈",
                text: "看了",
                state: "看了",

            }, {
                source: "太平洋",
                time: "123",
                name: "哈哈哈",
                text: "看了",
                state: "看了",

            }]
        }, {
            day: "2222222",
            contents: [{
                source: "太平洋",
                time: "123",
                name: "哈哈哈",
                text: "看了",
                state: "看了",

            }, {
                source: "太平洋",
                time: "123",
                name: "哈哈哈",
                text: "看了",
                state: "看了",

            }, {
                source: "太平洋",
                time: "123",
                name: "哈哈哈",
                text: "看了",
                state: "看了",
            }]
        }


    ]

}]);