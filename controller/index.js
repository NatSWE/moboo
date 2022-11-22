// get express and controller
const express = require('express')
const router = express.Router()
//this is the new product code
router.get('/', (req, res) => {
    res.render('index') 

})

router.get('show/:id', (req, res) => {
    db.Product.findById(req.params.id, (err, index) => {
        res.render("showBooks", {
            product: index,
            tabTitle: "index: " + index.name
        })
    })
})

module.exports = router