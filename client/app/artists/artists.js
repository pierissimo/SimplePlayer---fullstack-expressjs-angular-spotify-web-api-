'use strict';

angular.module('simplePlayerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('artists', {
        url: '/artists',
        templateUrl: 'app/artists/artists.html',
        controller: 'ArtistsCtrl'
      })
      .state('artistsDetail', {
        url: '/artists/:artistId',
        templateUrl: 'app/artists/artistsDetail.html',
        controller: 'ArtistsDetailCtrl'
      });
  });