(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService', 'categoryList']
  function CategoriesController(MenuDataService, categoryList) {
    var catCtrl = this;
    catCtrl.categories = categoryList;
    // console.log(categoryList);// Just making sure data came through.
  }
})();
