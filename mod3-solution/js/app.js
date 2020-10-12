(function () {
  'use strict';

  // Declare our components:
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('davidChuURL', 'https://davids-restaurant.herokuapp.com/menu_items.json')
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    // MenuSearchService.getMatchedMenuItems('chicken'); // Test of search function.
    this.found = [];// Initialize found list.

    this.searchTerm = "";

    this.searchMenu = function() {
      this.found = MenuSearchService.getMatchedMenuItems(this.searchTerm);// Use service to get array of matching items.
    }

    this.removeItem = function(index) {
      found.splice(index, 1);// Splice out the item that was to be removed.
    }
  }

  MenuSearchService.$inject = ['$http', 'davidChuURL'];
  function MenuSearchService($http, davidChuURL) {
    this.getMatchedMenuItems = function (searchTerm) {
      if (!searchTerm)
        return [];// Don't bother if no search term was given.

      console.log("Retrieving menu items...")

      return $http({ method: 'GET', url: davidChuURL }).then(function(result) {// Make http call and set callback handler.
        var foundItems = result.data.menu_items;// Extract full menu from returned data.
        console.log(foundItems);

        for(var i = 0; i < foundItems.length; i++) {
          if(foundItems[i].description.indexOf(searchTerm) == -1) {
            foundItems.splice(i, 1);// Splice out item if search term wasn't found in it.
          }
          // else {
          //   console.log(foundItems[i].description);// Test to see that search is working.
          // }
        }
        console.log(foundItems);
        return foundItems;// Return an array of only items that match.
      }).catch(function(error) {
        console.log("Connection error");
        return [];// Return no results if we didn't get anything.
      });
    };
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundList.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsController,
      controllerAs: 'list',
      bindToController: true
    }

    return ddo;
  }

  function FoundItemsController() {}

})();
