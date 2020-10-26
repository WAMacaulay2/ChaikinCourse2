describe('UserService', function () {

  var userService;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      userService = $injector.get('UserService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should successfully validate Favorite Dish', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/GOODTEST.json').respond('GOOD');

    userService.validateFavDish('GOODTEST').then(function(response) {
      expect(response).toEqual(true);
    });
    $httpBackend.flush();
  });

  it('should fail to validate Favorite Dish', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/BADTEST.json').respond(500, 'BAD');

    userService.validateFavDish('BADTEST').then(function(response) {
      expect(response).toEqual(false);
    });
    $httpBackend.flush();
  });

});
