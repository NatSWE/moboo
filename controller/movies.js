// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+

const express = require('express')
const router = express.Router()


//Movies Route
router.get('/', (req, res) => {
    res.render('movies/index') 

})

// New Route for movies to display to dsplay form
router.get('/new', (req, res) => {
    res.render('movies/new')
})

// route to create and add new movies posting to create a new movie
router.post('/', (req, res) => {
    res.send('create')
})

module.exports = router