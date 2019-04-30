var express = require("express");
var router  = express.Router();
var Home = require("../models/homes");
const { searchHomes, createHomes, showHomes, newHomes, getNewHomes } = require('../handlers/homes')



//CREATE - add new home to DB
router.post("/new", createHomes);

// search homes routes

router.get('/search', searchHomes)

//NEW - show form to create new home
router.get("/new", getNewHomes);

// SHOW - shows more info about one home
router.get("/:id", showHomes);


module.exports = router;

