'use strict';

angular.module('simplePlayerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('albums', {
        url: '/albums/:albumId',
        templateUrl: 'app/albums/albums.html',
        controller: 'AlbumsCtrl'
      });
  });