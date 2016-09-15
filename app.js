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
        });

        $urlRouterProvider.otherwise('/');
    });
