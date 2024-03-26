const express = require("express");
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');


// exports.createUser = async (req, res) => {
//     console.log('voila');
//     try {
//         let user = {
//             username: "hamzaminds89@gmail.com",
//             password: await bcrypt.hash("", 10)
//         };
//         const newUser = new UserModel(user);
//         newUser.save();
//         res.json("L'utilisateur a bien été créé");
//     } catch (error) {
//         res.json(error.message);
//     }
// };


exports.findUsers = async (req, res) => {
    try {
        
        let getUsers = await UserModel.find();
        res.json(getUsers);
    } catch (error) {
        res.json(error.message);
    }
};


