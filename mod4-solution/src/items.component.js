(function() {
  'use strict';

  angular.module('data')
  .component('items', {
    templateUrl: 'src/templates/item-list.template.html',
    bindings: {
      itemList: '<'
    }
  });

})();
