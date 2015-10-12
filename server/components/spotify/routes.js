'use strict';

var _  = require('lodash');


var baseUrl = 'https://api.spotify.com/v1/';
var routes = {
  'search' : 'search',
  'artists' : 'artists/?ids=:artistsIds',
  'albums' : 'albums/:albumId',
  'tracks' : 'albums/:albumId/tracks',
  'artistAlbums': 'artists/:artistId/albums?album_type=single,album&limit=50',
  'albumTracks' : 'albums/:albumId/tracks?limit=50'
};

module.exports = _.mapValues(routes, function(route, key){
  var url = [ _.trim(baseUrl, '/'), _.trim(route, '/') ].join('/');
  return url;
});


