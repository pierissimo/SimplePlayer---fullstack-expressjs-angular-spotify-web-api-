'use strict';

var _ = require('lodash'),
    spotifyService = require('../../components/spotify');

// Get list of artists
exports.index = function(req, res) {
  var artistsIds = req.params.artistsIds;
  
  spotifyService.artists(artistsIds).then(function(doc){
    res.json(doc);
  }, function(err){
    res.status(400).json({error: err.message});
  });
};


exports.artistAlbums = function(req, res) {
  var artistId = req.params.artistId;
  console.log(artistId);
  spotifyService.artistAlbums(artistId).then(function(doc){
    res.json(doc);
  }, function(err){
    res.status(400).json({error: err.message});
  });
};
