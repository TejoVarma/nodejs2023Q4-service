const express = require('express');
const Favourites = require('../models/favourites.model');
const favouritesControllers = {};
const Id = "favCollection"

favouritesControllers.favTrack = async function(req, res){
    try {
        await Favourites.findByIdAndUpdate(Id, {$push : {tracks : req.params.id}});
        res.status(201).json({ status: "Success", message: "New track added to favs." });
    } 
    catch (err) 
    {
        res.status(400).json({ status: "Failure", message: err.message });
    }
};

favouritesControllers.deleteFavTrack = async function(req, res){
    try {
        let fav = await Favourites.findById(Id);
        if (!fav || fav.tracks.indexOf(req.params.id) === -1) 
        {
            res.status(404).json({ status: "Failure", message: "track doesn't exists in favvorites" });
        }
        else
        {
            await Favourites.findByIdAndUpdate(Id, {$pull : {tracks : req.params.id}});
            res.status(204).json({ status: "Success", message: "one track removed from favs." }); 
        }
    } 
    catch (err) 
    {
        res.status(400).json({ status: "Failure", message: err.message });
    }
};

favouritesControllers.favAlbum = async function(req, res){
    try {
        await Favourites.findByIdAndUpdate(Id, {$push : {albums : req.params.id}});
        res.status(201).json({ status: "Success", message: "New album added to favs." });
    } 
    catch (err) 
    {
        res.status(400).json({ status: "Failure", message: err.message });
    }
};

favouritesControllers.deleteFavAlbum = async function(req, res){
    try {
        let fav = await Favourites.findById(Id);
        if (!fav || fav.albums.indexOf(req.params.id) === -1)
        {
            return res.status(404).json({ status: "Failure", message: "Album doesn't exists in favvorites" });
        }
        else
        {
            await Favourites.findByIdAndUpdate(Id, {$pull : {albums : req.params.id}});
            res.status(204).json({ status: "Success", message: "one album removed from favs." });
        }
    } 
    catch (err) 
    {
        res.status(400).json({ status: "Failure", message: err.message });
    }
};

favouritesControllers.favArtist = async function(req, res){
    try {
        await Favourites.findByIdAndUpdate(Id, {$push : {artists : req.params.id}});
        res.status(201).json({ status: "Success", message: "New artist added to favs." });
    } 
    catch (err) 
    {
        res.status(400).json({ status: "Failure", message: err.message });
    }
};


favouritesControllers.deleteFavArtist = async (req, res) => {
    try {
        let fav = await Favourites.findById(Id);
        if (!fav || fav.artists.indexOf(req.params.id) === -1) return res.status(404).json({ status: "Failure", message: "Artist doesn't exists in favvorites" });
        await Favourites.findByIdAndUpdate(Id, {$pull : {artists : req.params.id}});
        res.status(204).json({ status: "Success", message: "one artist removed from favs." });
    } 
    catch (err) 
    {
        res.status(400).json({ status: "Failure", message: err.message });
    }
};

favouritesControllers.getAllFav = async function(req,res){
    try{
        let fav = await Favourites.findById(Id);
        res.status(200).json({ status: "Success", result : fav});
    }
    catch(err)
    {
        res.status(400).json({ status: "Failure", message: err.message });
    }
};

favouritesControllers.isFav = async function(req,res,next){
    try {
        let fav = await Favourites.findById(Id);
        if(!fav) {
            fav = await new Favourites({
                _id: Id,
                artists : [],
                albums : [],
                tracks : []
            });
            await fav.save();
        }
        const key = req.path.split("/")[1];
        // console.log(key);
        if(fav[key+"s"].indexOf(req.params.id) !== -1) 
        {
            return res.status(200).json({ status : "Success", message : `${key} already exist in favs.`})
        }
        next();
    } 
    catch (err) 
    {
        return res.status(400).json({ status: "Failure", message: err.message });
    }
}

module.exports = favouritesControllers;