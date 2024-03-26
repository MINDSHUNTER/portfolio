const express = require("express");
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const session = require ('express-session');
const projectModel = require("../models/projectModel");


exports.displayLogin = (req, res) => {
    try {
        res.render("admin/index.html.twig"), {

        }
    } catch (error) {
        res.send(error)
    }
}


// utilisation de bcrypt  
exports.validLogin = async (req, res) => {
    try {
        let user = await UserModel.findOne({ username: req.body.username })
        if (user) {
            if (await bcrypt.compare(req.body.password, user.password)) {
                req.session.user = user._id
                res.redirect('/dashboard')
            } else {
                throw { password: "Mauvais mot de passe" }
            }
        } else {
            throw { email: "cet utilisateur n'est pas enregistré" }
        }
    } catch (error) {
        res.render('admin/index.html.twig',

            {

            })
    }
}

//pour afficher mon dashboard 
exports.displayDashboard = async (req, res) => {
    try {
        const projects = await projectModel.find()
        res.render("./admin/dashboard.twig", {
            projects: projects
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}