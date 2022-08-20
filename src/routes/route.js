const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook  )

router.post("/createpublisher", publisherController.createpublisher  )

router.get("/getBooksallData", bookController.getBooksallData)

router.get("/allbooks", bookController.allbooks)

router.put("/updateBookPrice", bookController.updateBookPrice)

module.exports = router;
 


// const express = require('express');
// const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// module.exports = router;