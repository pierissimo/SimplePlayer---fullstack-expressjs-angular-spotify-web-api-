'use strict';

angular.module('simplePlayerApp')
  .constant('API_ROUTES', {
    'search': '/api/search/:query',
    'artists': '/api/artists/:artistsIds',
    'album': '/api/albums/:albumId',
    'artistAlbums': '/api/artists/:artistId/albums',
    'albumTracks': '/api/albums/:albumId/tracks',
  });
