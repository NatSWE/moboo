//DEPENDENCIES //
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// MOVIE SCHEMA
const movieSchema = new mongoose.Schema({
     title: { 
       type: String, 
       required: true
     },
     director: {type: String},
     description: {type: String},
     release_date: {type: String},
     img: {type: String, default: 'https://i.imgur.com/nnDEWge.png'}   
})


// making a movie model with schema
const Movie = mongoose.model('Movie', movieSchema)

// // movie model will be in index.js
module.exports = Movie

