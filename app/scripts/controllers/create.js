'use strict';

/**
 * @ngdoc function
 * @name secretSantaApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the secretSantaApp
 */
angular.module('secretSantaApp')
  .controller('CreateCtrl', function ($scope, dbService) {
    $scope.created = false;
    $scope.header = 'New Group';
    $scope.submit = function() {
        console.log('asfasf');
        if ($scope.name && $scope.email) {
            $scope.created = true;
            $scope.header = 'Group Created!';
            dbService.makeGroup($scope.email, $scope.name);
        }
    };
  });
