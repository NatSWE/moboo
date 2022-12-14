
const mongoose = require("mongoose");

const connectionString =process.env.MONGODBURI
// connect to MongoDB via mongoose

mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);
// console.log() connection status
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});
mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});
mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});
module.exports.Book = require("./book.js");
module.exports.Movie = require("./movie.js");