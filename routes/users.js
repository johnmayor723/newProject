const express = require("express");
const router  = express.Router();
const passport = require("passport");
const {userhome, signup } = require('../handlers/auth')
const User = require("../models/users");




//handle sign up logic
router.get('/home', userhome)


router.post("/signup", signup)

router.post('/signin', passport.authenticate('local',{
    failureRedirect: '/'
}), function(req, res) {
    let user = req.user
  res.render('users/home',{user:user})
});

// logout route
router.get("/signout", function(req, res){
   req.logout();
   res.redirect("/");
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}

module.exports = router;
