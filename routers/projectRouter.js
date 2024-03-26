const projectRouter = require("express").Router();
const multer = require("../services/multer-config");
const projectController = require('../controllers/projectController');
const projectModel = require("../models/projectModel");
const authguard = require("../services/authguard");


// supprimer un projet 
projectRouter.get('/deleteproject/:projectid', authguard, projectController.deleteproject);

// Update le projet 

projectRouter.get('/updateproject/:projectid', authguard, projectController.updateProject);


projectRouter.post('/updateproject/:projectid',  multer.single("image"), authguard, projectController.updatedProject);



// router pour créer le projet
projectRouter.post('/dashboard', multer.single("image"), projectController.createProject);

module.exports = projectRouter