const express = require("express");
const router  = express.Router();
const passport = require("passport");
const { signup, hosthome } = require('../handlers/hosts')
const User = require("../models/hosts");




//handle sign up logic
router.get('/home', hosthome )


router.post("/signup", signup)

router.post('/signin', passport.authenticate('local',{
    failureRedirect: '/'
}), function(req, res) {
     req.session.valid = true;
     let host = req.user
     req.session.user = host
     //req.session = host
     console.log('redirecting to home page')
     //res.render('hosts/home', {host: host})
     res.redirect('/hosts/home')
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
