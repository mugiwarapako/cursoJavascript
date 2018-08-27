'use strict'

var express = require('express');
var projectController = require('../controllers/project');


var router = express.Router();


router.get('/home', projectController.home);
router.post('/test', projectController.test);
router.post('/save-project', projectController.saveProject);



module.exports = router;