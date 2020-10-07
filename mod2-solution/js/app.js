(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    this.list = ShoppingListCheckOffService.toBuyList;
    this.moveToBought = ShoppingListCheckOffService.moveToBought;
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.list = ShoppingListCheckOffService.alreadyBoughtList;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyList = [];
    service.alreadyBoughtList = [];

    addItem('Cookies', 200);
    addItem('Tacos', 50);
    addItem('Burgers', 20);
    addItem('Chicken Wings', 75);
    addItem('Sandwiches', 40);

    function addItem (itemName, itemQuantity) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      }

      service.toBuyList.push(item);
    }

    service.moveToBought = function(index) {
      service.alreadyBoughtList.push(service.toBuyList[index]);
      service.toBuyList.splice(index, 1);
    }
  }

})();
