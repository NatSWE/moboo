//DEPENDENCIES //
const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// MOVIE SCHEMA
const movieSchema = new mongoose.Schema({
     name: { 
       type: String, 
       required: true
     }
})


// making a movie model with schema
const movie = mongoose.model('Movie', movieSchema)

// // movie model will be in index.js
module.exports = movie

module.exports = mongoose.model('movie', movieSchema)