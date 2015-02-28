;(function(){
"use strict"
angular.module('nhHome', ['ui.router','nhHouse','nhLayout','nhConsumer']).
 config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {




  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/houses");
  //
  // Now set up the states
  $stateProvider

 	.state('houses', {
      url: "/houses",
      templateUrl: 'nh-house/index.html',
      
    }).state('houses.list', {
      url: "/list",
       templateUrl: "nh-house/nh-house-list/index.html",
       controller:'nhHouseList'

    }).state('houses.add', {
      url: ":houseId/add",
       templateUrl: "nh-house/nh-house-add/index.html",
           controller:'nhHouseList'

    }).state('consumer', {
      url: "/consumer",
      templateUrl: 'nh-consumer/index.html',
      
    }).state('consumer.list', {
      url: "/list",
       templateUrl: "nh-consumer/nh-consumer-list/index.html",
       controller:'nhConsumerList'

    }).state('consumer.detail', {
      url: "/detail",
       templateUrl: "nh-consumer/nh-consumer-detail/index.html",
       controller:'nhConsumerDetail'

    })



}]);})();