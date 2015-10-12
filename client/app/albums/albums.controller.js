'use strict';

angular.module('simplePlayerApp')
  .controller('AlbumsCtrl', function ($scope, ApiService, $state, $stateParams, _) {
    var albumId = $stateParams.albumId;
    if(!albumId) { $state.go('artists'); }

    ApiService.album(albumId).then(function(data){
      $scope.album = data;
      console.log($scope.album);
    });
    ApiService.albumTracks(albumId).then(function(data){
      $scope.tracks = data;
    });
  });
