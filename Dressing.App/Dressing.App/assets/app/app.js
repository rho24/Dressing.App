angular.module('app', ['ionic', 'app.outfits'])
    .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        });

    $urlRouterProvider.otherwise("/tab/outfits");
});