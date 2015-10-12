'use strict';

describe('Service: YoutubeService', function () {

  // load the service's module
  beforeEach(module('simplePlayerApp'));

  // instantiate service
  var YoutubeService;
  beforeEach(inject(function (_YoutubeService_) {
    YoutubeService = _YoutubeService_;
  }));

  it('should do something', function () {
    expect(!!YoutubeService).toBe(true);
  });

});
