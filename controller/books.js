// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+

const db = require("../models")
const express = require('express')
const router = express.Router()

////////////////////
//  ROUTES
///////////////////

// Show BOOK route
router.get('/:id', (req, res) => {
    db.Movie.findById(req.params.id, (err, book) => {
       res.send(book)
    })
  })
  
  // New Route for books to display to dsplay form
  router.get('/new', (req, res) => {
    res.render('newBook.ejs', {
        tabTitle: "New Book Released"
    })
  })
  
  // Create book
  router.post('/', (req, res) => {
    if (req.body.visited) {
      req.body.visited = true
    } else {
      req.body.visited = true
    }
    db.Book.create(req.body, (err, book) => {
      res.send(book)
    })
  })
  
  // Edit book Route
  router.get('/:id', (req, res) => {
    db.Book.findById(req.params.id, (err, book) => {
      res.render("editMovie", {
         book: book,
         tabTitle:"Edit"
      })
    })
  })
  
  //Update
  // router.get('/:id', (req, res) => {
  //   db.book.findById(req.params.id, req.body, { new book 
  //       res.redirect('/book/' + movie_id)
  //   })
  // })
  
  // Delete movie route
  router.delete('/:id', (req, res) =>{
    db.Book.findByIdAndRemove(req.params.id, (err, book) => {
       res.redirect('/')
    })
  })
  
  module.exports = router
