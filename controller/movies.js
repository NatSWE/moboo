// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+

const express = require('express')
const router = express.Router()
const Movie = require('../models/movie') 
// const db = require('../models/movie')

////////////////////
//  ROUTES
///////////////////



// Movies Route
router.get('/index', async (req, res) => {
   let searchOptions = {}
   if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
   }
   try {
    const movies = await movies.find(searchOptions)
    res.render('movies/index', { 
       movies: movies, 
       searchOptions: req.query
    }) 
   } catch {
     res.redirect('/')
   }  
})


// New Route for movies to display to dsplay form
router.get('/new', (req, res) => {
    res.render('movies/new', { movie: new Movie() })
})

//create new movie route

router.post('/', async (req, res) => {
  const movies = new Movies({
    name: req.body.name
  })
  try {
   const newMovies = await movies.save()
   res.redirect(`movies`)
  } catch {
    res.render('movies/new', {
       movie: movie,     
    })
           
  }
})



// router.post('/', (req, res) => {
//    const movie = new Movie({
//      name: req.body.name
//    })
//    movie.save((err, newMovie) => {
//    if (err) {
//        res.render('movies/new', {
//               movie: movie,
//               errorMessage: 'Error creating Movie'
//        })
//    } else {
//        res.redirect(`movies`)
//     }
//    })
// })


// route to create and add new movies posting to create a new movie
// router.post('/', (req, res) => {
//        res.send(req.body.name)
//        res.render('movies/new', {
//         movie: movie
//        })
// })

// router.post('/', (req, res) => {
    
//        res.send(req.body.name)
//        res.render('movies/index', {
//         movie: movie
//        })
// })


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