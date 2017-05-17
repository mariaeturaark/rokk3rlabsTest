(function() {
    'use strict';

    angular
        .module('app')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('news', {
                url: '/news',
                data: {
                    displayName: 'News'
                },
                views: {
                    "@": {
                        templateUrl: 'app/components/news/news.html',
                        controller: 'NewsController',
                        controllerAs: 'news'
                    }
                }
            })
            .state('analytics', {
                url: '/analytics',
                data: {
                    displayName: 'Analytics'
                },
                views: {
                    "@": {
                        templateUrl: 'app/components/analytics/analytics.html',
                        controller: 'AnalyticsController',
                        controllerAs: 'analytics'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/news');
    }

})();
