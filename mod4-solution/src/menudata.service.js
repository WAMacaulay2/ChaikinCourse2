(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('allCategoriesURL', 'https://davids-restaurant.herokuapp.com/categories.json')
  .constant('singleCategoryURL', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

  MenuDataService.$inject = ['$http', 'allCategoriesURL', 'singleCategoryURL'];
  function MenuDataService() {
    var service = this;

    service.getAllCategories = function() {
      return $http({ method: 'GET', url: allCategoriesURL });
    }

    service.getItemsForCategory = function(categoryShortName) {
      return $http({ method: 'GET', url: (singleCategoryURL + categoryShortName) })
    }
  }

})();
