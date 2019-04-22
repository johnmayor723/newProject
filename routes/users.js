const express = require("express");
const router  = express.Router();
const passport = require("passport");
const {userhome } = require('../handlers/auth')
const User = require("../models/users");




//handle sign up logic
router.get('/home', userhome)


router.post("/signup", function(req, res){
    User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("users/home", {user:user});
        });
    });
});

router.post("/signin", passport.authenticate("local", 
    {
        successRedirect: "/users/home",
        failureRedirect: "/"
    }), function(req, res){
});


module.exports = router;
