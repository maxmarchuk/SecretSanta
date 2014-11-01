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

                return true;

            },
            getGroupies: function (hash) {
                //hard coded value of people in group for now
                //TODO: get groupies from DB, man.
                return ['Samantha Wallace', 'Victor Borishevkin', 'Lamar Hawk', 'Max Marchuk', 'Casey Marchuk', 'Rebecca Stone', 'Chance Snow', 'Steven Snow'];
            }
        };
    });
