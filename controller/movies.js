// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+


// const db = require('../models')

const express = require('express')
const router = express.Router()
const movie = require('../models/movie') 


////////////////////
//  ROUTES
///////////////////



//Movies Route
router.get('/', (req, res) => {
    res.render('movies/index') 

})

// New Route for movies to display to dsplay form
router.get('/new', (req, res) => {
    res.render('movies/new', { movie: new movie() })
})

// route to create and add new movies posting to create a new movie
router.post('/', (req, res) => {
    res.send('create')
})

module.exports = router