'use strict';

/**
 * @ngdoc overview
 * @name groupeerApp
 * @description
 * # groupeerApp
 *
 * Main module of the application.
 */

var groupy = angular
  .module('groupeerApp', [
    'ngAnimate',
    'ngResource',
    'ui.router'
  ]);

groupy.controller('homeController', ["$scope", function($scope){
  // $scope.projects = [
  //   'Mido Design',
  //   'Koala Design',
  //   'Many other stuff',
  //   'cooool stuff'
  // ];
  // $scope.selected = undefined;
}]);

groupy.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeController'
    })
    .state('sign-in', {
      url: '/sign-in',
      templateUrl: 'views/sign-in.html'
    })
    .state('sign-up', {
      url: '/sign-up',
      templateUrl: 'views/sign-up.html'
    });
}]);