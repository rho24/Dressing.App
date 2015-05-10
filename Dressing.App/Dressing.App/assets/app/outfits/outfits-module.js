angular.module('app.outfits', ['ionic'])
    .config(function($stateProvider) {
    $stateProvider
        .state('tabs.outfits', {
            url: '/outfits',
            views: {
                'outfits-tab': {
                    templateUrl: 'templates/outfits.html'
                }
            }
        })
        .state('tabs.outfits.create', {
            url: '/create',
            views: {
                'outfits-tab@tabs': {
                    templateUrl: 'templates/outfits-create.html'
                }
        }
    });
});