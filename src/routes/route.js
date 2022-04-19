const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const batchController= require("../controllers/batchController")
const devloperController= require("../controllers/devloperController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )
router.post("/createBatch", batchController.createBatch  )
router.post("/createDevloper",devloperController.createDevloper )
router.get("/scholarship",devloperController.scholarship )
router.get("/getDevelopers",devloperController.developers )
module.exports = router;