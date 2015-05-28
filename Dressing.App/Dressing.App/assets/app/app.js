angular.module('app', [
        'app.dependencies',
        'app.outfits',
        'app.items'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            });

        $urlRouterProvider.otherwise("/tab/outfits");
    });