const express = require('express');
const Albums = require('../models/albums.model');
const albumsControllers = {};

albumsControllers.newAlbum = async function(req,res){
    try{
        let album = await new Albums(req.body);
        let newAlbum = await album.save();
        res.status(201).json({status : "Success", message : "Successfully Created", result : album});
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
albumsControllers.getAllAlbums = async function(req,res){
    try{
        let albums = await Albums.find();
        res.status(200).json({status : "Success", result : albums});
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
albumsControllers.getAlbumById = async function(req,res){
    try{
        let album = await Albums.findById(req.params.id);
        if(album)
        {
            res.status(200).json({status : "Success", result : album});
        }
        else
        {
            res.status(404).json({status : "Failed", message : "Album Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
albumsControllers.updateAlbumInfo = async function(req,res){
    try{
        let album = await Albums.findById(req.params.id);
        if(album)
        {
            let updatedAlbum = await Albums.findByIdAndUpdate(req.params.id, req.body, {new : true});
            res.status(200).json({status : "Success", result : updatedAlbum});
        }
        else
        {
            res.status(404).json({status : "Failed", message : "Album Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
albumsControllers.deleteAlbum = async function(req,res){
    try{
        let album = await Albums.findById(req.params.id);
        if(album)
        {
            await Albums.findByIdAndDelete(req.params.id);
            res.status(204).json({status: "Success", message : "Album successfully deleted"});
        }
        else
        {
            res.status(404).json({status : "Failed", message : "Album Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};

module.exports = albumsControllers;