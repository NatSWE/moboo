/////////////////////////////
//  DEPENDENCIES
/////////////////////////////

const express = require('express')
const app = express();
const port = 3000;
const methodOverride = require('method-override');

// Access Models//
const db = require('./models')

//ACCESS CONTROLLERS
const booksCtrl = require('./controller/books')
const moviesCtrl = require('./controller/movies')

// creating to keep information that inputed example keep new author name when created
const bodyParser = require('body-parser')

// serve tell server where are public file will locate
app.use(express.static('public'));
// set views to connect to folder as ejs
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));
// body parser config to accept our datatypes
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log('running all routes');
  next();
})



app.get('views', function (req, res) {
    res.sendFile('views/index' , { root : __dirname});
  });

app.get('/view', function (req, res) {
    res.sendFile('views/new' , { root : __dirname});
  });

  app.get('/showMovies', function (req, res) {
    res.sendFile('views/showMovies' , { root : __dirname});
  });





//Index Homepage Route
app.get('/', (req, res) => {
  db.Book.find({}, (err, books) => {
    db.Movie.find({}, (err, movies) => {
      res.render('index', {
        books: books,
        movies:movies,
        tabTitle:'moboo'
      })
    })
  })
})






// tell controller which route to use

app.use('/books', booksCtrl)
app.use('/movies', moviesCtrl)

app.get('/movies', (req, res) =>{
  res.send('')
})

app.get('/books', (req, res) =>{
  res.send('')
})






// tell server where to listen
app.listen(port, ()=> {
    console.log(`App is locked and loaded on ${port}`);
  });