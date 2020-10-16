(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('allCategoriesURL', 'https://davids-restaurant.herokuapp.com/categories.json')
  .constant('singleCategoryURL', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

  MenuDataService.$inject = ['$http', 'allCategoriesURL', 'singleCategoryURL'];
  function MenuDataService($http, allCategoriesURL, singleCategoryURL) {
    var service = this;

    service.getAllCategories = function() {
      console.log("Getting categories...");
      return $http({ method: 'GET', url: allCategoriesURL })
      .then(function(result) {
        var categoryList = result.data;
        console.log(categoryList);
        return categoryList;
      }).catch(function(error) {
        console.log("Failed to retrieve categories");
        return [];
      });
    }

    service.getItemsForCategory = function(categoryShortName) {
      console.log("Getting menu items...");
      return $http({ method: 'GET', url: (singleCategoryURL + categoryShortName) })
      .then(function(result) {
        var itemList = result.data;
        console.log(itemList);
        return itemList;
      }).catch(function(error) {
        console.log("Failed to retrieve menu items");
        return [];
      });
    }
  }

})();
