'use strict';

angular.module('simplePlayerApp')
  .controller('AlbumsCtrl', function ($scope, ApiService, YoutubeService, $state, $stateParams, _) {
    var albumId;
    
    function init(){
      albumId = $stateParams.albumId;
      if(!albumId) { $state.go('artists'); }

      _getData();
    };


    function _getData(){
      ApiService.album(albumId).then(function(data){
        $scope.album = data;
      });

      ApiService.albumTracks(albumId).then(function(data){
        $scope.tracks = data;
      });
    };


    $scope.play = function(track){
      $scope.currentPlaying = track;
    };

    init();
  });
