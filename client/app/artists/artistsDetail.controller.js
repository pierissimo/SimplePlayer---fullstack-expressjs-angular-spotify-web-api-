'use strict';

angular.module('simplePlayerApp')
  .controller('ArtistsDetailCtrl', function ($scope, ApiService, $state, $stateParams) {
    var artistId;


    function init(){
      artistId = $stateParams.artistId;
      if(!artistId) { $state.go('artists'); }
      
      _getData();
    };

    function _getData(){
      ApiService.artists(artistId).then(function(data){
        $scope.artist = data[0];
      });

      ApiService.artistAlbums(artistId).then(function(data){
        $scope.albums = data;
      });
    };

    init();
  });
