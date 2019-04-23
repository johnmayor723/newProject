const express = require("express");
const router  = express.Router();
const passport = require("passport");
const {userhome, signup } = require('../handlers/auth')
const User = require("../models/users");




//handle sign up logic
router.get('/home', userhome)


router.post("/signup", signup)

router.post('/signin', passport.authenticate('local', { failureRedirect: '/' }), function(req, res) {
  res.redirect('/users/home' , req.user.username)
});

/* router.post("/signin", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/signup"
    }), function(){
    
}); */


module.exports = router;
