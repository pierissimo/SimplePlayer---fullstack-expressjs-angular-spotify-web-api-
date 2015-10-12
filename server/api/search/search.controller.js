'use strict';

var _ = require('lodash'),
    spotifyService = require('../../components/spotify');

// Get list of searchs
exports.index = function(req, res) {
  var query = req.params.query;
  
  spotifyService.search(query, 'artist').then(function(docs){
    res.json(docs);
  }, function(err){
    res.status(400).json({error: err.message});
  });
};