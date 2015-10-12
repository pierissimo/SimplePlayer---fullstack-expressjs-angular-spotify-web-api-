'use strict';

angular.module('simplePlayerApp')
  .directive('search', function (ApiService, _) {
    return {
      templateUrl: 'app/search/search.html',
      restrict: 'E',
      scope:{
        favourites: '=',
        addFavourite: '&',
        removeFavourite: '&'
      },

      link: function (scope, element, attrs) {

        scope.launchSearch = function(){
           ApiService.search(scope.q).then(function(data){
            scope.results = data;
          });
        };

        scope.isFavourite = function(albumId){
          return _.indexOf(scope.favourites, albumId) > -1;
        };

        scope.toggleFavourite = function(albumId){
          if(scope.isFavourite(albumId)){
            scope.removeFavourite({albumId: albumId});
          }else{
            scope.addFavourite({albumId: albumId});
          }
        };

        scope.$watch('q', function(newValue, oldValue) {
          if(newValue && newValue.length > 3 && newValue !== oldValue){
            scope.launchSearch();
          }
        });
      }
    };
  });