'use strict';

var _ = require('lodash'),
    spotifyService = require('../../components/spotify');

// Get list of albums
exports.albums = function(req, res) {
  var albumId = req.params.albumId;
  
  spotifyService.album(albumId).then(function(doc){
    res.json(doc);
  }, function(err){
    res.status(400).json({error: err.message});
  });
};



exports.tracks = function(req, res) {
  var albumId = req.params.albumId;
  
  spotifyService.tracks(albumId).then(function(doc){
    res.json(doc);
  }, function(err){
    res.status(400).json({error: err.message});
  });
};
