const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memesController= require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/district", CowinController.district)
router.get("/weather", weatherController.weather)
router.get("/SortCities", weatherController.SortCities)
router.post("/memes", memesController.memes)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;