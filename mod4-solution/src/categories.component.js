(function() {
  'use strict';

  angular.module('data')
  .component('categories', {
    templateUrl: 'src/templates/category-list.template.html',
    bindings: {
      categoryList: '<'
    }
  });

})();
