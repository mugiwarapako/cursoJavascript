'use strict'

var express = require('express');
var projectController = require('../controllers/project');


var router = express.Router();


router.get('/home', projectController.home);
router.post('/test', projectController.test);
router.post('/save-project', projectController.saveProject);
router.get('/project/:id?', projectController.getProlect);
router.get('/projects', projectController.getAllProjects);
router.put('/project/:id?', projectController.updateProject);

module.exports = router;