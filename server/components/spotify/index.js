'use strict';

var _  = require('lodash'),
    Promise = require('bluebird'),
    request = Promise.promisify(require('request')),
    spotifyRoutes = require('./routes');



function search(query, type){
  var url = spotifyRoutes.search;
  var query = {
    q: query,
    type: type
  };
  
  return request({
      url:url, 
      qs:query,
    })
    .then(function(response){
      if(response[0].statusCode !== 200){
        throw new Error(JSON.parse(response[0].body).error.message);
      }
      try{
        
        var results = _.uniq(JSON.parse(response[0].body)[type + 's'].items, function(item){
          return item.name;
        });
        
        return results;
      }
      catch(e){
        throw new Error(e);
      }
    });
};

function artists(artistsIds){
  var url = spotifyRoutes.artists.replace(':artistsIds', artistsIds);
  console.log(url);
  return request({
      url:url
    })
    .then(function(response){
      if(response[0].statusCode !== 200){
        throw new Error(JSON.parse(response[0].body).error.message);
      }
      try{
        return JSON.parse(response[0].body)['artists'];
      }
      catch(e){
        throw new Error(e);
      }
    });
};


function album(albumId){
  var url = spotifyRoutes.albums.replace(':albumId', albumId);
  
  return request({
      url:url
    })
    .then(function(response){
      if(response[0].statusCode !== 200){
        throw new Error(JSON.parse(response[0].body).error.message);
      }
      try{
        return JSON.parse(response[0].body);
      }
      catch(e){
        throw new Error(e);
      }
    });
};

function artistAlbums(artistId){
  var url = spotifyRoutes.artistAlbums.replace(':artistId', artistId);
  
  return request({
      url:url
    })
    .then(function(response){
      if(response[0].statusCode !== 200){
        throw new Error(JSON.parse(response[0].body).error.message);
      }
      try{

        var results = _.uniq(JSON.parse(response[0].body).items, function(item){
          return item.name.toLowerCase();
        });

        return results;
      }
      catch(e){
        throw new Error(e);
      }
    });
};

function tracks(albumId){
  var url = spotifyRoutes.albumTracks.replace(':albumId', albumId);
  
  return request({
      url:url
    })
    .then(function(response){
      if(response[0].statusCode !== 200){
        throw new Error(JSON.parse(response[0].body).error.message);
      }
      try{
        return JSON.parse(response[0].body).items;
      }
      catch(e){
        throw new Error(e);
      }
    });
};


module.exports.search = search;
module.exports.album = album;
module.exports.artistAlbums = artistAlbums;
module.exports.artists = artists;
module.exports.tracks = tracks;