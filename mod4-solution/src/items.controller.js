(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', 'itemList']
  function ItemsController(MenuDataService, itemList) {
    var itemCtrl = this;
    itemCtrl.categoryName = itemList.category.name;
    itemCtrl.items = itemList.menu_items;
    // console.log(categoryList);// Just making sure data came through.
  }
})();
