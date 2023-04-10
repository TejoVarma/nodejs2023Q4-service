const express = require('express');
const Tracks = require('../models/tracks.model');
const tracksControllers = {};

tracksControllers.postNewTrack = async function(req,res){
    try{
        let track = await new Tracks(req.body);
        let newTrack = track.save();
        res.status(201).json({status:"Success", message: "Successfully added track", result: track});
    }
    catch(err)
    {
        res.status(400).json({status:"Failed", message : err.message});
    }
};
tracksControllers.getAllTracks = async function(req,res){
    try{
        let track = await Tracks.find();
        res.status(200).json({status:"Success", result: track});
    }
    catch(err)
    {
        res.status(400).json({status:"Failed", message : err.message});
    }
};
tracksControllers.getTrackById = async function(req,res){
    try{
        let track = await Tracks.findById(req.params.id);
        if(track)
        {
            res.status(200).json({status:"Success", result: track});
        }
        else
        {
            res.status(404).json({status:"Failed", message : "Track Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status:"Failed", message : err.message});
    }
};
tracksControllers.updateTrackInfo = async function(req,res){
    try{
        let track = await Tracks.findById(req.params.id);
        if(track)
        {
            let updatedTrack = await Tracks.findByIdAndUpdate(req.params.id, req.body, {new : true});
            res.status(200).json({status:"Success", result: updatedTrack});
        }
        else
        {
            res.status(404).json({status:"Failed", message : "Track Not Found"});
        }
    }
    catch(err)
    {
        res.status(400).json({status:"Failed", message : err.message});
    }
};
tracksControllers.deleteTrack = async function(req,res){
    
};

module.exports = tracksControllers;