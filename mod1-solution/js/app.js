(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunchList = "";

    $scope.msgColor = "black";
    $scope.inputColor = "black";

    $scope.CheckList = function () {
      //First, check that something was actually entered:
      if ($scope.lunchList == '') {
        $scope.message = "Please enter data first";
        SetColors("red", "black");
        return;
      }

      var list = $scope.lunchList.split(',');//Commas are our separator character.
      console.log("Item list size: " + numItems);
      var numItems = CountItems(list);//This function only counts non-empty items.

      if (numItems > 3) {
        $scope.message = "Too much!";
        SetColors("green", "red");
      }
      else {
        $scope.message = "Enjoy!";
        SetColors("green", "green");
      }
    };

    function SetColors(input, msg) {
      $scope.msgColor = msg;
      $scope.inputColor = input;
    }

    function CountItems(list) {
      var numItems = 0;
      for (var i = 0; i < list.length; i++) {
        console.log("Item " + i + ": " + list[i].trim() + ";");
        if (list[i].trim() != '') { //string.trim() removes whitespace on edges of string; an all-whitespace string will become blank.
          numItems++;//Only increase count when string has more than whitespace in it.
        }
      }

      console.log("Actual items: " + numItems);
      return numItems;
    }

  }
})();
