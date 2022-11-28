// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+

// const express = require('express')
// const router = express.Router()
// const Movie = require('../models/movie') 
// const db = require('../models/movie')

const db = require("../models")
const express = require('express')
const router = express.Router()

////////////////////
//  ROUTES
///////////////////



// Movies Route


router.get('/', (req, res) => {
  db.Movie.find({}, (err, movies) => {
      res.render('showMovies', {
          movies: movies,
          tabTitle: 'Movies'
      })
  })
})

// router.get('/', (req, res) => {
//   res.render('showMovies', { movies: movies })
// })


// New Route for movies to display to dsplay form
router.get('/new', (req, res) => {
    res.render('movies/new', {
      movies: movies
    })
})

//create new movie route




// route to create and add new movies posting to create a new movie
router.post('/', (req, res) => {
       res.send(req.body.name)
       res.render('movies/new', {
        movie: movie
       })
})




// router.post('/', (req, res) => {
//     // create new movie with form data (`req.body`)
//     const movie = new movie ({
//         name: req.body.name
//     })

//     db.movie(req.body, (err, movie) => {
//       res.redirect('/movie/' + movie._id)
//     })
//   });




module.exports = router