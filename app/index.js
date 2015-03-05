angular.module('nhHome', ['ui.router', 'nhHouse', 'nhLayout', 'nhConsumer','nhPersonnel','nhIndividual','nhDynamic']).
config(function($stateProvider, $urlRouterProvider) {



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
    controller: 'nhHouseList'

  }).state('houses.add', {
    url: ":houseId/add",
    templateUrl: "nh-house/nh-house-add/index.html",
    controller: 'nhHouseAdd'

  }).state('houses.detail', {
    url: ":houseId/detail",
    templateUrl: "nh-house/nh-house-detail/index.html",
    controller: 'nhHouseDetail'

  }).state('consumer', {
    url: "/consumer",
    templateUrl: 'nh-consumer/index.html',

  }).state('consumer.list', {
    url: "/list",
    templateUrl: "nh-consumer/nh-consumer-list/index.html",
    controller: 'nhConsumerList'

  }).state('consumer.detail', {
    url: "/detail",
    templateUrl: "nh-consumer/nh-consumer-detail/index.html",
    controller: 'nhConsumerDetail'

  }).state('personnel', {
    url: "/personnel",
    templateUrl: "nh-personnel/index.html",


  }).state('personnel.list', {
    url: "/list",
    templateUrl: "nh-personnel/nh-personnel-list/index.html",
    controller: 'nhPersonnelList'


  })  .state('individual', {
    url: "/individual",
    templateUrl: "nh-individual/index.html",
    controller:'nhIndividual'


  }).state('individual.infoModify', {
    url: "/info",
    templateUrl: "nh-individual/nh-individual-info-modify/index.html",
    controller: 'nhIndividualInfoModify'



  }).state('individual.passwordModify', {
    url: "/passwordModify",
    templateUrl: "nh-individual/nh-individual-password-modify/index.html",
        controller: 'nhIndividualPasswordModify'


  }).state('dynamic', {
    url: "/dynamic",
    templateUrl: "nh-dynamic/index.html",
        


  }).state('dynamic.list', {
    url: "/list",
    templateUrl: "nh-dynamic/nh-dynamic-list/index.html",
    controller :'nhDynamicList'


  }).state('dynamic.add',{
    url: "/add",
    templateUrl: "nh-dynamic/nh-dynamic-add/index.html",
    controller :'nhDynamicAdd'


  }).state('dynamic.detail', {
    url: "/detail",
    templateUrl: "nh-dynamic/nh-dynamic-detail/index.html",
    controller :'nhDynamicDetail'


  })




});
