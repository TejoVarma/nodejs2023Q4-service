const express = require('express');
const mongoose = require('mongoose');
const Artists = require('../models/artists.model');
const uuid = require('uuid');
const Tracks = require('../models/tracks.model');
const Favorites = require('../models/favorites.model');
const favController = require('../controllers/favorites.controller');
const Id = favController.Id;
const Albums = require('../models/albums.model');
const artistsControllers = {};

artistsControllers.newArtist = async function(req,res){
    try{
        let artist = await new Artists({
            ...req.body,
            _id : uuid.v4()
        });
        let newArtist = await artist.save();
        res.status(201).json({status : "Success", message : "Successfully Created", result : artist});
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
artistsControllers.getAllArtists = async function(req,res){
    try{
        let artists = await Artists.find();
        res.status(200).json({status : "Success", result : artists});
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
artistsControllers.getArtistById = async function(req,res){
    try{
        let artist = await Artists.findById(req.params.id);
        if(artist)
        {
            res.status(200).json({status : "Success", result : artist});
        }
        else
        {
            res.status(404).json({status : "Failed", message : "Artist Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
artistsControllers.updateArtistInfo = async function(req,res){
    try{
        let artist = await Artists.findById(req.params.id);
        if(artist)
        {
            let updatedArtist = await Artists.findByIdAndUpdate(req.params.id, req.body, {new : true});
            res.status(200).json({status : "Success", result : updatedArtist});
        }
        else
        {
            res.status(404).json({status : "Failed", message : "Artist Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};
artistsControllers.deleteArtist = async function(req,res){
    try{
        let artist = await Artists.findById(req.params.id);
        if(artist)
        {
            await Albums.updateMany({artistId : req.params.id}, {artistId : null})
            await Tracks.updateMany({artistId : req.params.id}, {artistId : null});
            await Favorites.findByIdAndUpdate(Id, {$pull : {artists : req.params.id}});
            await Artists.findByIdAndDelete(req.params.id);
            res.status(204).json({status: "Success", message : "Artist successfully deleted"});
        }
        else
        {
            res.status(404).json({status : "Failed", message : "Artist Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status : "Failed", message : err.message});
    }
};

module.exports = artistsControllers;