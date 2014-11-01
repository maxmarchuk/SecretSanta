'use strict';

/**
 * @ngdoc function
 * @name secretSantaApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the secretSantaApp
 */
angular.module('secretSantaApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    }
  });
