'use strict';

var express = require('express');
var controller = require('./artist.controller');

var router = express.Router();

router.get('/:artistsIds', controller.index);
router.get('/:artistId/albums', controller.artistAlbums);

module.exports = router;