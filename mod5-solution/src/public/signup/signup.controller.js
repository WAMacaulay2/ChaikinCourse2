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

    $ctrl.attemptedSubmit = false;
    $ctrl.favDishValid = false;
    $ctrl.processing = false;

    $ctrl.checkDish = function() {
      $ctrl.attemptedSubmit = true;
      $ctrl.processing = true;

      UserService.validateFavDish($ctrl.user.favDish)
      .then(function(response) {
        $ctrl.processing = false;
        $ctrl.favDishValid = true;
      })
      .catch(function(response) {
        $ctrl.processing = false;
      });
    }

    $ctrl.submit = function() {
      $ctrl.attemptedSubmit = true;
      $ctrl.processing = true;

      UserService.validateFavDish($ctrl.user.favDish)
      .then(function(response) {
        $ctrl.processing = false;
        $ctrl.favDishValid = true;

        UserService.updateUser($ctrl.user);
      })
      .catch(function(response) {
        $ctrl.processing = false;
      });
    }
  }
})();
