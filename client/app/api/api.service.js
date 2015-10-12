'use strict';

angular.module('simplePlayerApp')
  .service('ApiService', function (API_ROUTES, $http, $q, _) {
    
    function search(query) {
      var request = $http({
          method: "get",
          url: API_ROUTES.search.replace(':query',query),
      });

      return (request.then(handleSuccess, handleError));
    }

    function artists(artistsIds) {
      var artistsIds = angular.isString(artistsIds) ? artistsIds.split(',') : artistsIds;
      var request = $http({
          method: "get",
          url: API_ROUTES.artists.replace(':artistsIds', artistsIds.join(',')),
      });

      return (request.then(handleSuccess, handleError));
    }

    function album(albumId) {
      var request = $http({
          method: "get",
          url: API_ROUTES.album.replace(':albumId', albumId ),
      });

      return (request.then(handleSuccess, handleError));
    }

    function artistAlbums(artistId) {
      var request = $http({
          method: "get",
          url: API_ROUTES.artistAlbums.replace(':artistId', artistId),
      });

      return (request.then(handleSuccess, handleError));
    }

    function albumTracks(albumId) {
      var request = $http({
          method: "get",
          url: API_ROUTES.albumTracks.replace(':albumId', albumId),
      });

      return (request.then(handleSuccess, handleError));
    }


    function handleError(response) {
      if (!angular.isObject(response.data) ||
          !response.data.message
      ) {
          return ($q.reject("An unknown error occurred."));
      }
      return ($q.reject(response.data.message));
    }

    function handleSuccess(response) {
      return (response.data);
    }


    return ({
        search: search,
        artists: artists,
        album: album,
        artistAlbums: artistAlbums,
        albumTracks: albumTracks
    });
  });
