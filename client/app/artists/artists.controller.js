'use strict';

angular.module('simplePlayerApp')
  .controller('ArtistsCtrl', function ($scope, StorageService, ApiService, $state, $stateParams, _) {
    var favourites;


    function init(){
      _getFavourites();
    };

    $scope.removeFavourite = function(itemId){
      StorageService.removeFavourite(itemId);
      $scope.favourites = _.filter($scope.favourites, function(el){
        return el.id !== itemId;
      });
    };


    function _getFavourites(){
      favourites = StorageService.getFavourites();
      if(favourites.length > 0){
        ApiService.artists(StorageService.getFavourites()).then(function(data){
          $scope.favourites = _.values(_.omit( data, _.isEmpty) );
        });
      }else{
        $scope.favourites = 0;
      }
    };



    init();
  });
