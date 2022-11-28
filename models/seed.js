const db = require('./')
const newMovies =
    [
        {
            title: "Top Gun Maverick",
            director: "Joseph Kosinski",
            description: "Action Adventure",
            release_date: "October 2, 2022",
            img: 'https://i.imgur.com/ysV7e1E.jpg',
            likes: 1
            
        }, {
            title: "Independence Day",
            director: "JRoland Emmerich",
            description: "Action Adventure",
            release_date: "November 12, 1996",
            img: 'https://i.imgur.com/vPr7gAZ.jpg',
            likes: 1
        }, {
            title: "The Pursuit of Happyness",
            director: "Gabriele Muccino",
            description: "Drama",
            release_date: "June 32, 2004",
            img: 'https://i.imgur.com/auu74Dx.jpg',
            likes: 1
            
        }, {
            title: "The Notebook",
            director: "Nick Cassavetes",
            description: "Romance Drama",
            release_date: "January 23, 2022",
            img: 'https://i.imgur.com/ysV7e1E.jpg',
            likes: 1
        },
        {
            title: "King Richard",
            director: "Reinaldo Marcus Green",
            description: "Sport Drama",
            release_date: "December 12, 2021",
            img: 'https://i.imgur.com/ysV7e1E.jpg',
            likes: 1
        }
    ]
db.Movie.deleteMany({}, (err, movies) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all movies')

        db.Movie.insertMany(newMovies, (err, movies) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', movies.length, "movies")
            }
            
        })
    }
})

// const db = require('./')
const newBooks =
    [
        {
            title: "How to Talk to Anyone",
            author: "Leil Lowndes",
            description: "Relationships",
            img: "https://i.imgur.com/lCKlFIK.jpg",
            likes: 1
            
        }, {
            title: "Rich Dad Poor Dad",
            author: "Robert T. Kiyosaki",
            description: "Finance",
            img: "https://i.imgur.com/WwMO4EN.jpg",
            likes: 1

        }, {
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            description: "Finance",
            img: "https://i.imgur.com/43NZ1Vv.jpg",
            likes: 1,  

        }, {
            title: "How to Win Friends & Influence People",
            author: "Dale Carnegie",
            description: "Relationships",
            img: "https://i.imgur.com/9RiwQDl.jpg",
            likes: 1

        }, {
            title: "Finding Me",
            author: "Michelle Obama",
            description: "Relationships",
            img: "https://i.imgur.com/erJmd4s.jpg",
            likes: 1
        },
    ]

    db.Book.deleteMany({}, (err, books) => {
        if (err) {
            console.log('Error occured in remove', err)
        } else {
            console.log('Removed all books')
    
            db.Book.insertMany(newBooks, (err, books) => {
                if (err) {
                    console.log('Error occured in insertMany', err)
                } else {
                    console.log('Created', books.length, "books")
                }
                
            })
        }
    })