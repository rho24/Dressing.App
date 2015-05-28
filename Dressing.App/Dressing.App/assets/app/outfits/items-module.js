angular.module('app.outfits', ['app.dependencies'])
    .config(function($stateProvider) {
        $stateProvider
            .state('tabs.items', {
                url: '/items',
                views: {
                    'items-tab': {
                        templateUrl: 'templates/items.html'
                    }
                }
            })
            .state('tabs.items.create', {
                url: '/create',
                views: {
                    'items-tab@tabs': {
                        templateUrl: 'templates/items-create.html',
                        controller: 'itemsCreate as vm'
                    }
                }
            });
    }).controller('itemsCreate', function (itemResource) {
        var vm = this;
        vm.item = {
            name: '',
            type: '',
            description: ''
        }
        vm.create = function() {
            itemResource.create(vm.item);

        }

    }).factory('itemResource', function($resource) {
        return $resource('/api/item/:id', null, {
            create: { method: 'POST' }
        });
    });