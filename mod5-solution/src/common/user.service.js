(function() {
  "use strict";

  angular.module('common')
  .service("UserService", UserService);

  UserService.$inject = ['$http', 'ApiPath'];
  function UserService($http, ApiPath) {
    var service = this;

    var firstName = "";
    var lastName = "";
    var email = "";
    var phone = "";
    var favDish = "";

    service.getFirstName = function() {
      return firstName;
    }
    service.getlastName = function() {
      return lastName;
    }
    service.getEmail = function() {
      return email;
    }
    service.getPhone = function() {
      return phone;
    }
    service.getFavDish = function() {
      return favDish;
    }

    service.validateFavDish = function(short_name) {
      console.log("Validating favorite dish " + short_name.toUpperCase() + "...")
      return $http.get(ApiPath + "/menu_items/" + short_name.toUpperCase() + ".json")
      .then(function(response) {
        console.log("Favorite dish exists");
        return true;
      }).catch(function(response) {
        console.log("Favorite dish does not exist");
        return false;
      });
    }

    service.updateUser = function(userData) {
      firstName = userData.firstName;
      lastName = userData.lastName;
      email = userData.email;
      phone = userData.phone;
      favDish = userData.favDish;
    }
  }
})();
