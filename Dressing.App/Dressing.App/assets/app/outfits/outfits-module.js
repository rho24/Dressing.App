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
                        templateUrl: 'templates/outfits-create.html',
                        controller: 'outfitsCreate as vm'
                    }
                }
            });
    }).controller('outfitsCreate', function($ionicModal) {
        var vm = this;
        $ionicModal.fromTemplateUrl('my-modal.html', {
            animation: 'slide-in-up'
        }).then(function(modal) {
            vm.modal = modal;
        });
        vm.openModal = function() {
            vm.modal.show();
        };
        var closeModal = function() {
            vm.modal.hide();
        };

    });