// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+

const db = require("../models")
const express = require('express')
const router = express.Router()

////////////////////
//  ROUTES
///////////////////

// Index BOOK route
router.get('/', (req, res) => {
  db.Movie.findById(req.params.id, (err, movies) => {
     res.send(movies)
  })
})

// Show movie route
router.get('/show/:id', (req, res) => {
  db.Movie.findById(req.params.id, (err, movies) => {
     res.render('showMovies', {
        movies: movies,
        tabTitle: 'Movies'
     })
  })
})



// New Route for movies to display to dsplay form
router.get('/new', (req, res) => {
  res.render('newMovies.ejs', {
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
  db.Movie.create(req.body, (err, movies) => {
    res.send(movies)
  })
})
// Delete movie route
router.delete('/:id', (req, res) =>{
  db.Movie.findByIdAndRemove(req.params.id, (err, movies) => {
     res.redirect('/')
  })
})

// Edit movie Route
router.put('/:id', (req, res) => {
  db.Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, movies) => {
      res.redirect('/movies/show/' + movies._id)
  })
})
router.get('/:id/edit', (req, res) => {
  db.Movie.findById(req.params.id, (err, movies) => {
    res.render("editMovie", {
       movies: movies,
       tabTitle:"Edit"
    })
  })
})


// //Update
// router.get('/:id', (req, res) => {
//   db.Movie.findByIdAndUpdate(req.params.id, req.body, { new: true}, 
//       res.redirect('/movies/' + movies._id)
//   )
// })



module.exports = router