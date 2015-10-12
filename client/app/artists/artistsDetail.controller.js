'use strict';

angular.module('simplePlayerApp')
  .controller('ArtistsDetailCtrl', function ($scope, ApiService, $state, $stateParams) {
    var artistId = $stateParams.artistId;
    if(!artistId) { $state.go('artists'); }
    $scope.artist = {};

    ApiService.artists(artistId).then(function(data){
      $scope.artist = data[0];
    });

    ApiService.artistAlbums(artistId).then(function(data){
      $scope.artist.albums = data;
    });
  });
