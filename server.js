/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express')


// generate a new express app and call it 'app'
const app = express();



// conect controller foled ex/ index.js --- require index.js 
const indexRouter = require('./controller/index')

// body parser config to accept our datatypes
app.use(express.urlencoded({ extended: true }));

// thinking if I need to command this code
// app.use((req, res, next) => {
//     next();
// });

//initialize variable to use for our environment port
const port = 3000;

// set views to connect to folder as ejs
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('index', 'views/index')
app.set('showBooks', 'views/showBooks')

// serve tell server where are public file will locate
app.use(express.static('public'));


//connecting database using monggose
// const mongoose = require('mongoose')
// mongoose.connect(process.env.DATABASE_URL)

// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('connected to Mongoose'))



////////////////////
//  ROUTES
///////////////////









////////////////////
//  ROUTES ENDS
///////////////////

// tell controller which route to use
app.use('/', indexRouter)

// tell server where to listen
app.listen(port, ()=> {
    console.log(`App is locked and loaded on ${port}`);
  });