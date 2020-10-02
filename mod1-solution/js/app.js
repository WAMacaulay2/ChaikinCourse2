(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunchList = "";

    $scope.msgColor = "black";
    $scope.borderColor = "black";

    $scope.checkList = function () {
      if ($scope.lunchList == '') {
        $scope.message = "Please enter data first";
        $scope.borderColor = "red";
        $scope.msgColor = "black";
        return;
      }

      $scope.borderColor = "green";

      var list = $scope.lunchList.split(',');
      var numItems = list.length;
      console.log("Number of items: " + numItems);

      if (numItems > 3) {
        $scope.message = "Too much!";
        $scope.msgColor = "red";
      }
      else {
        $scope.message = "Enjoy!";
        $scope.msgColor = "green";
      }
    };

  }
})();
