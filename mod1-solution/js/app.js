(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunchList = "";

    $scope.checkList = function () {
      if ($scope.lunchList == '') {
        $scope.message = "Please enter data first";
        return;
      }

      var list = $scope.lunchList.split(',');
      var numItems = list.length;
      console.log("Number of items: " + numItems);

      if (numItems > 3) {
        $scope.message = "Too much!";
      }
      else {
        $scope.message = "Enjoy!";
      }
    };

  }
})();
