(function() {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService']
  function SignUpController(UserService) {
    var $ctrl = this;
    $ctrl.user = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      favDish: ""
    };

    $ctrl.submitted = false;// The Form has successfully submitted.
    $ctrl.favDishName = "";// The name of the favorite dish.
    $ctrl.processing = false;// The Favorite Dish is currently being validated.

    $ctrl.checkDish = function() {
      if(!$ctrl.user.favDish) {
        return;
      }
      $ctrl.processing = true;

      UserService.validateFavDish($ctrl.user.favDish)
      .then(function(response) {
        console.log("favDish=" + response);
        $ctrl.processing = false;
        $ctrl.favDishName = response;
      });
    }

    $ctrl.submit = function() {
      $ctrl.submitted = true;
      UserService.updateUser($ctrl.user);
    }
  }
})();
