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
        $scope.name = '';
        $scope.email = '';
        $scope.joined = false;
        $scope.header = 'Join Group';
        $scope.hash = $routeParams.hash || null;
        $scope.groupies = dbService.getGroupies();

        $scope.join = function () {
            if ($scope.hash) {
                if (dbService.joinGroup($scope.name, $scope.email, $scope.hash)) {
                    $scope.joined = true;

                } else {
                    console.log('email: ' + $scope.email + ', name: ' + $scope.name + ', hash: ' + $scope.hash);
                }
            }
        };
    });
