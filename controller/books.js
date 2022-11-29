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
    db.Book.findById(req.params.id, (err, books) => {
       res.send(books)
    })
  })

// Show book route
router.get('/show/:id', (req, res) => {
    db.Book.findById(req.params.id, (err, books) => {
       res.render('showBooks', {
          books: books,
          tabTitle: 'Books'
       })
    })
  })
  
  // New Route for books to display to dsplay form
  router.get('/new', (req, res) => {
    res.render('newBooks.ejs', {
        tabTitle: "New Book Released"
    })
  })
  
  // Create movie
  router.post('/', (req, res) => {
    if (req.body.visited) {
      req.body.visited = true
    } else {
      req.body.visited = true
    }
    db.Book.create(req.body, (err, books) => {
      res.send(books)
    })
  })

  // Delete movie route
  router.delete('/:id', (req, res) =>{
    db.Book.findByIdAndRemove(req.params.id, (err, books) => {
       res.redirect('/')
    })
  })
  

 
  // Edit movie Route
  router.put('/:id', (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, books) => {
        res.redirect('/books/show/' + books._id)
    })
  })
  router.get('/:id/edit', (req, res) => {
    db.Book.findById(req.params.id, (err, books) => {
      res.render("editMovie", {
         books: books,
         tabTitle:"Edit"
      })
    })
  })


  
//   //Update
//   router.get('/:id', (req, res) => {
//     db.book.findByIdAndUpdate(req.params.id, req.body, { new: true}, 
//         res.redirect('/book/' + movie_id)
//     )
//   })
  
  module.exports = router
