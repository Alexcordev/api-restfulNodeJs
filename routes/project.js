'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

router.post('/save-project', ProjectController.saveProject);

module.exports = router;