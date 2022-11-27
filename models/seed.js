// const db = require('./index.ejs')
// const newMovies =
//     [
//         {
//             name: 'Action',
//             description: 'fight.',
//             img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
            
//         }, {
//             name: 'fire',
//             description: 'fire action movies.',
//             img: 'http://bluelips.com/prod_images_large/bones1.jpg',
//         }, {
//             name: 'Magic',
//             description: 'superpower.',
//             img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
//             price: 7000,
//             qty: 1
//         }
//     ]
// db.Movie.deleteMany({}, (err, movies) => {
//     if (err) {
//         console.log('Error occured in remove', err)
//     } else {
//         console.log('Removed all movies')

//         db.Movie.insertMany(newMovies, (err, movies) => {
//             if (err) {
//                 console.log('Error occured in insertMany', err)
//             } else {
//                 console.log('Created', movies.length, "movies")
//             }
            
//         })
//     }
// })
// // // movie model will be in index.js
// module.exports = movie