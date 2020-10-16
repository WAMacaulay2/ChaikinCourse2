(function() {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    }).state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        categoryList: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    }).state('items', {
      url: '/items/{short_name}',
      templateUrl: 'src/templates/items.template.html',
      controller: "ItemsController as itemCtrl",
      resolve: {
        itemList: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.short_name);
        }]
      }
    });
  }
})();
