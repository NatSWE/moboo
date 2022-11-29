const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create A Book SCHEMA
const bookSchema = new mongoose.Schema({
    title: { 
      type: String, 
      required: true
    },
    author: {type: String},
    description: {type: String},
    img: {type: String, default: 'https://i.imgur.com/OX8kWHM.png'}
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book