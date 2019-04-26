const User = require("../models/users");
//const jwt = require("jsonwebtoken");
const passport = require('passport')
const Home = require('../models/homes')


exports.userhome = function(req, res){
     console.log(req.session.user)
      var user = req.session.user
      Home.find({}, function(err, homes){
          console.log(homes)
       if(err){
           console.log(err);
       } else {
          res.render('users/home' , {user: user, homes :homes});;
       }
    });
   
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
          req.session.valid = true;
         let user = req.user
         req.session.user = user
         //req.session = host
         console.log('redirecting to home page')
         //res.render('hosts/home', {host: host})
         res.redirect('/users/home')
        });
    });
}
