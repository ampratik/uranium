const express = require('express');
const router = express.Router();

const bookModel= require("../models/bookmodel")
const bookController= require("../controllers/bookControler")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createNewBook", bookController.createNewBook )
router.get("/getListOfBooks",bookController.getListOfBooks)
router.get("/getBookInYear",bookController.getBookInYear)
router.get("/getRandomBooks",bookController.getRandomBooks)
router.get("/getParticularBooks",bookController.getParticularBooks)
router.get("/getXINRBooks",bookController.getXINRBooks)

module.exports = router;