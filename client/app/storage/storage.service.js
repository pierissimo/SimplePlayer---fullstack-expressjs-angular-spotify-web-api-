'use strict';

angular.module('simplePlayerApp')
  .factory('StorageService', function (localStorageService, _) {
      

    function getFavourites(){
      return localStorageService.get('favourites') || [];
    }

    function addFavourite(itemId){
      var favourites = getFavourites();
      favourites.push(itemId);
      return localStorageService.set('favourites', favourites);
    }

    function removeFavourite(itemId){
      var favourites = getFavourites();
      _.remove(favourites, function(f) {
          return f === itemId;
      });

      localStorageService.set('favourites', favourites);
    }

    return{
      getFavourites: getFavourites,
      addFavourite: addFavourite,
      removeFavourite: removeFavourite
    };
  });
