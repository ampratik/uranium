const express = require('express');
let axios = require("axios")
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const wheatherController= require("../controllers/wheatherController")
const memeCOntroller= require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getsession", CowinController.getByDistrictId)
router.get("/getWheatherAll", wheatherController.getWeatherAll)
router.get("/getWeatherTemp",wheatherController.getWeatherTemp);
router.get("/arrangeByTemp",wheatherController.arrangeByTemp);

router.get("/getAllMemes",memeCOntroller.getAllMemes);
router.post("/createMeme",memeCOntroller.createMeme);

module.exports = router;