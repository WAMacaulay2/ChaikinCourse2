(function() {
  "use strict";

  angular.module('common')
  .service("UserService", UserService);

  UserService.$inject = ['$http', 'ApiPath'];
  function UserService($http, ApiPath) {
    var service = this;

    var validatedDish = null;// JSON data for last dish validated.

    var setup = false;
    var firstName = "";
    var lastName = "";
    var email = "";
    var phone = "";
    var favDish = null;//validatedDish goes here once user confirms.

    service.isSetup = function() {
      return setup;
    }
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
        console.log(response);
        validatedDish = response.data;
        return response.data.name;
      }).catch(function(response) {
        console.log("Favorite dish does not exist");
        return "";
      });
    }

    service.updateUser = function(userData) {
      firstName = userData.firstName;
      lastName = userData.lastName;
      email = userData.email;
      phone = userData.phone;
      favDish = validatedDish;
      setup = true;
    }

    service.retrieveUser = function() {
      // Test user:
      // return {
      //   firstName: 'John',
      //   lastName: 'Doe',
      //   email: 'some@domain.com',
      //   phone: '(123) 456-7890',
      //   favDish: {id:1,
      //     short_name:"A1",
      //     name:"Won Ton Soup with Chicken",
      //     description:"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
      //     price_small:2.55,
      //     price_large:5.0,
      //     small_portion_name:"pint",
      //     large_portion_name:"quart",
      //     created_at:"2020-10-22T16:30:03.699Z",
      //     updated_at:"2020-10-22T16:30:03.699Z",
      //     category_short_name:"A",
      //     image_present:true}
      // }

      if(!setup) {
        return null;
      }
      return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        favDish: favDish
      }
    }
  }
})();
