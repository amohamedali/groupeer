"use strict";var groupy=angular.module("groupeerApp",["ngAnimate","ngResource","ui.router"]);groupy.controller("homeController",["$scope","$http","$sce",function(a,b,c){var d=[];b.get("data/projects.json").success(function(b){a.projects=b.projects}),a.trustSrc=function(a){return c.trustAsResourceUrl(a)},a.categoryFilter=function(c){var e=d.indexOf(c);-1===e?d.push(c):d.splice(e,1),b.get("data/projects.json").success(function(b){a.projects.length=0;for(var c=d.length-1;c>=0;c--)a.projects=a.projects.concat(b[d[c]])})}}]),groupy.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/home.html",controller:"homeController"}).state("sign-in",{url:"/sign-in",templateUrl:"views/sign-in.html"}).state("sign-up",{url:"/sign-up",templateUrl:"views/sign-up.html"})}]),groupy.directive("hoverSidebar",function(){return{restrict:"AE",templateUrl:"views/hoverSidebar.html",replace:!0}}),angular.module("groupeerApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);