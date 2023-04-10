const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/users.model');
const bcrypt = require('bcrypt');

const userControllers = {};

userControllers.postNewUser = async function(req,res){
    try {
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        let user = await new User({
            ...req.body,
            __v : 1.0,
            password: hashPassword
        });
        newUser = await user.save();
        res.status(201).json({ status: "Success", message: "Successfully created new user", result : user });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
};
userControllers.getAllUsers = async function(req, res){
    try {
        let users = await User.find();
        res.status(200).json({ status: "Success", result : users });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
};
userControllers.getUserById = async function(req,res){
    try{
        let user = await User.findById(req.params.id);
        if(user)
        {
            res.status(200).json({status : "Success", message: "Found User", result: user})
        }
        else
        {
            res.status(404).json({status : "Failed", message : "User Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status:"Failed", message : err.message});
    }
};
userControllers.changePassword = async function(req,res){
    try{
        let user = await User.findById(req.params.id);
        if(user)
        {
            let valid = await bcrypt.compare(req.body.oldpassword, user.password);
            if(valid)
            {
                let newPassword = await bcrypt.hash(req.body.newpassword, 10);
                let updatedUser = await User.findByIdAndUpdate(req.params.id, {password : newPassword}, {new : true});
                res.status(200).json({ status: "Success", message: "Your password was updated", result : updatedUser});
            }
            else
            {
                res.status(403).json({ status: "Failed", message: "Oops...entered the wrong password"});
            }
        }
        else
        {
            res.status(404).json({ status: "Failed", message: "User Not Found" });
        }
    }
    catch(err){
        res.status(400).json({ status: "Failed", message: err.message });
    }
};
userControllers.deleteUser = async function(req,res){
    try{
        let user = await User.findById(req.params.id);
        if(user)
        {
            let user = await User.findByIdAndDelete(req.params.id);
            res.status(204).json({status : "Success", message : "User data is successfully deleted"});
        }
        else
        {
            res.status(404).json({status : "Failed", message : "User Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};

module.exports = userControllers;