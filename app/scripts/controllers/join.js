'use strict';

/**
 * @ngdoc function
 * @name secretSantaApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the secretSantaApp
 */
angular.module('secretSantaApp')
    .controller('JoinCtrl', function ($scope, $routeParams, dbService) {
        $scope.email = '';
        $scope.name = '';
        $scope.hash = $routeParams.hash || null;
        $scope.header = 'Join Group';
        $scope.joined = false;

        $scope.join = function () {
            if ($scope.hash) {
                if (dbService.joinGroup($scope.email, $scope.name, $scope.hash)) {
                    $scope.joined = true;

                } else {
                    console.log('email: ' + $scope.email + ', name: ' + $scope.name + ', hash: ' + $scope.hash);
                }
            }
        };
    });
