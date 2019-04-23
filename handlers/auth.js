const User = require("../models/users");
const jwt = require("jsonwebtoken");
const passport = require('passport')


exports.userhome = function(req, res){
    res.render('users/home')
}

exports.signin =  function(req, res, next) {
  // finding a user

};

exports.signup = function(req, res){
     User.register(new User({username: req.body.username, email:req.body.email}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.send('failure');
        }
        passport.authenticate("local")(req, res, function(){
           res.render("users/home", {user:user});
           console.log(user)
        });
    });
}
