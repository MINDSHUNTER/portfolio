const mainRouter = require('express').Router()
const projectModel = require("../models/projectModel")

mainRouter.get('/', async (req, res) => {
    try {
        const projects = await projectModel.find()
        res.render("home/index.twig", {
            projects: projects
        })
    } catch (err) {
        res.send(err)
    }
})
// Dans cette partie il faut inclure projectModel et utiliser find(), pour les afficher sur la section experience

module.exports = mainRouter