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
    req.session.valid = true;
     let user = req.user
     req.session.user = user
     //req.session = host
     console.log('redirecting to home page')
     //res.render('hosts/home', {host: host})
     res.redirect('/users/home')
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
