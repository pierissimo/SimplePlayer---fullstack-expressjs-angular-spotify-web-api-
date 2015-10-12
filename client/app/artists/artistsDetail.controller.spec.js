'use strict';

describe('Controller: ArtistsDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('simplePlayerApp'));

  var ArtistsDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtistsDetailCtrl = $controller('ArtistsDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
