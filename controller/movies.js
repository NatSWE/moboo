// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+

const db = require("../models")
const express = require('express')
const router = express.Router()

////////////////////
//  ROUTES
///////////////////

// Show movie route
router.get('/:id', (req, res) => {
  db.Movie.findById(req.params.id, (err, movie) => {
     res.send(movie)
  })
})



// New Route for movies to display to dsplay form
router.get('/new', (req, res) => {
  res.render('newBook.ejs', {
      tabTitle: "New Movie Released"
  })
})

// Create movie
router.post('/', (req, res) => {
  if (req.body.visited) {
    req.body.visited = true
  } else {
    req.body.visited = true
  }
  db.Movie.create(req.body, (err, movie) => {
    res.send(movie)
  })
})

// Edit movie Route
router.get('/:id', (req, res) => {
  db.Movie.findById(req.params.id, (err, movie) => {
    res.render("editMovie", {
       movie: movie,
       tabTitle:"Edit"
    })
  })
})

//Update
router.get('/:id', (req, res) => {
  db.book.findByIdAndUpdate(req.params.id, req.body, { new: true}, 
      res.redirect('/book/' + movie_id)
  )
})

// Delete movie route
router.delete('/:id', (req, res) =>{
  db.Movie.findByIdAndRemove(req.params.id, (err, movie) => {
     res.redirect('/')
  })
})

module.exports = router