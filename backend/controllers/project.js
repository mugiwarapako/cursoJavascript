'use strict'

var projectModel = require('../models/project');

var controller = {
    home:function(req, res){

        return res.status(200).send({
            message: 'soy la home'
        });

    },

    test: function(req ,res){
        return res.status(200).send({
            message: 'soy el test'
        });
    },

    saveProject: function(req, res){
        var project = new projectModel();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored)=>{

            if(err){
                return res.status(500).send({
                    message:'Error al guardar el documento.'
                });
            }
            if(!projectStored){
                return res.status(404).send({
                    message:'No se a podido guardar.'
                });
            }

            return res.status(200).send({
                project: projectStored,
                message:'Se guardo.'
            });


        });

        return res.status(200).send({
            params: project,
            message: "Metodo saveProject"
        })

    },

    getProlect: function(req, res){

        var projectId = req.params.id;

        if(projectId == null){
            return res.status(404).send({message: 'El proyecto no existe.'});
        }
        projectModel.findById(projectId, (error, project)=>{
            if(error){
                return res.status(500).send({message: 'Error al devolver los datos'});
            }
            if(!project){
                return res.status(404).send({message: 'El proyecto no existe.'});
            }

            return res.status(200).send({project: project});
        });

    },

    getAllProjects: function(req, res){

        projectModel.find({}).sort('-year').exec((error, projects) => {
            if(error){
                return res.status(500).send({message: 'Error al devolver los datos'});
            }
            if(!projects){
                return res.status(404).send({message: 'El proyecto no existe.'});
            }

            return res.status(200).send({projects: projects});
        })
    },

    updateProject: function(req, res){

        var projectId = req.params.id; 
        var update = req.body;

        projectModel.findByIdAndUpdate(projectId, update, (error, projectUpdate)=>{
            if(error){
                return res.status(500).send({message: 'Error al devolver los datos'});
            }
            if(!projectUpdate){
                return res.status(404).send({message: 'El proyecto no existe.'});
            }

            return res.status(200).send({project: projectUpdate});
        });

    }
};


module.exports = controller;