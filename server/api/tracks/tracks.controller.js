'use strict';

var _ = require('lodash'),
    spotifyService = require('../../components/spotify');

// Get list of albums
exports.index = function(req, res) {
  console.log('dioooo',req.params);
  var albumId = req.params.albumId;
  
  spotifyService.tracks(albumId).then(function(doc){
    res.json(doc);
  }, function(err){
    res.status(400).json({error: err.message});
  });
};