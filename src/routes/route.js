const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login",auth.mid,userController.loginUser)

//The userId is sent by front end
router.put("/users/:userId",auth.mid, userController.getUserData)

router.delete("/users/:userId",auth.mid, userController.deletUser)

module.exports = router;    