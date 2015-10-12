'use strict';

angular.module('simplePlayerApp')
  .factory('StorageService', function (localStorageService, _) {
      

    function getFavourites(){
      return localStorageService.get('favourites') || [];
    }

    function addFavourite(albumId){
      var favourites = getFavourites();
      favourites.push(albumId);
      return localStorageService.set('favourites', favourites);
    }

    function removeFavourite(albumId){
      var favourites = getFavourites();
      _.remove(favourites, function(f) {
          return f === albumId;
      });

      localStorageService.set('favourites', favourites);
    }

    return{
      getFavourites: getFavourites,
      addFavourite: addFavourite,
      removeFavourite: removeFavourite
    };
  });
