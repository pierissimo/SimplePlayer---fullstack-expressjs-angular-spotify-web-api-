'use strict';

angular.module('simplePlayerApp')
  .controller('MainCtrl', function ($scope, StorageService) {
    
     function init(){
      _updateFavourites();
     };

     $scope.addFavourite = function(albumId){
        StorageService.addFavourite(albumId);
        _updateFavourites();
     };

     $scope.removeFavourite = function(albumId){
        StorageService.removeFavourite(albumId);
        _updateFavourites();
     };


     function _updateFavourites(){
      $scope.favourites = StorageService.getFavourites();
     };


     init();
  });
