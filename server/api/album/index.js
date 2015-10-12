'use strict';

var express = require('express');
var controller = require('./album.controller');

var router = express.Router();

router.get('/:albumId', controller.albums);
router.get('/:albumId/tracks', controller.tracks);

module.exports = router;