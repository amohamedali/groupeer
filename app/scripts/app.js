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

groupy.controller('homeController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
  var activeCategories = [];

  $http.get('data/projects.json')
    .success(function(data) {
      $scope.projects = data.projects;//.concat(data.services)
    });

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

  $scope.categoryFilter = function(category) {
    var ind = activeCategories.indexOf(category);
    if (ind === -1) {
      activeCategories.push(category);
    }
    else {
      activeCategories.splice(ind, 1);
    }
    $http.get('data/projects.json')
      .success(function(data) {
        $scope.projects.length = 0;
        for (var i = activeCategories.length - 1; i >= 0; i--) {
          // debugger;
          $scope.projects = $scope.projects.concat(data[activeCategories[i]]);
        }
    });
  };
}]);

groupy.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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

groupy.directive('hoverSidebar', function(){
  return {
    restrict: 'AE',
    templateUrl: 'views/hoverSidebar.html',
    replace: true,
  };
});