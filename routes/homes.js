var express = require("express");
var router  = express.Router();
var Home = require("../models/homes");



//CREATE - add new home to DB
router.post("/", function(req, res){
    // get data from form and add to campgrounds array
    var title = req.body.title;
    var image = req.body.image;
    var desc = req.body.description;
    var newHost = {title: title, image: image, description: desc}
    // Create a new home and save to DB
    Home.create(newHost, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to  homepage
            res.redirect("/");
        }
    });
});

//NEW - show form to create new home
router.get("/new", function(req, res){
   res.render("homes/new"); 
});

// SHOW - shows more info about one home
router.get("/:id", function(req, res){
    //find the home with provided ID
    Home.findById(req.params.id).populate("comments").exec(function(err, foundHome){
        if(err){
            console.log(err);
        } else {
            console.log(foundHome)
            //render show template with that home
            res.render("homes/show", {home: foundHome});
        }
    });
});


module.exports = router;

