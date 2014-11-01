'use strict';

/**
 * @ngdoc service
 * @name secretSantaApp.dbService
 * @description
 * # dbService
 * Service to manage any database transactions
 */
angular.module('secretSantaApp')
    .service('dbService', function dbService() {
        return {

            makeGroup: function (email, name) {
                return {
                    editURL: '/edit/12345',
                    shareURL: '/join/67890'
                };
            },
            joinGroup: function (email, name, hash) {

                return 'success';

            }
        };
    });
