require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
.then(()=>{
    console.log("Connected to DB")
})
.catch(()=>{
    console.log("Error in connecting to DB")
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server running at ${process.env.PORT}`);
})