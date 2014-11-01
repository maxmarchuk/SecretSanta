'use strict';

/**
 * @ngdoc overview
 * @name secretSantaApp
 * @description
 * # secretSantaApp
 *
 * Main module of the application.
 */
angular
  .module('secretSantaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function (routeProvider) {
    routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/join/:hash', {
            templateUrl: 'views/join.html',
            controller: 'JoinCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  }]);
