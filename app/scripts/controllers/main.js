'use strict';

/**
 * @ngdoc function
 * @name groupeerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the groupeerApp
 */
angular.module('groupeerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
