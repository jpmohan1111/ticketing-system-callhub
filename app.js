'use strict';

angular.module('ticketPortal', ['ui.router', "ngMessages", "customFilters"])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider


            .state('app', {
                url: '/',
                views: {
                    'ticketList': {
                        templateUrl: 'views/ticketList.html'
                    }
                }
            }

            .state('Yona', {
                url: '/Yona',
                views: {
                    'Yona': {
                        templateUrl: 'Yona/Yona.html'
                    }
                }
            }));

        $urlRouterProvider.otherwise('/');
    });
