//DEPENDENCIES //
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// MOVIE SCHEMA
const movieSchema = new mongoose.Schema({
     name: { 
       type: String, 
       required: true
     },
     description: {type: String},
     img: {type: String},
})


// making a movie model with schema
const Movie = mongoose.model('Movie', movieSchema)

// // movie model will be in index.js
module.exports = Movie

// module.exports = mongoose.model('movie', movieSchema)