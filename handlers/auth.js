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

exports.updateuser = function(req, res){
    let id = req.user.id
    User.findById(id,  function(err, user){
        if(!user){
            //req.flash('error', 'no account found')
            console.log(err)
            res.redirect('/users/home/:user_id/new')
        }
        let email = req.body.email
        let id = req.body.id
        let idnumber = req.body.idnumber
        let bvn = req.body.bvn
        let image = req.body.image
        let username = req.body.username
        let lastname = req.body.lastname
        let firstname = req.body.firstname
        let dob = req.body.dob
        let phone = req.body.phone
        
        if(!email || !id || !idnumber || bvn || image ||username || lastname || firstname){
           // req.flash('error', 'one or more fields missing')
            console.log('one or more fields missing')
            req.redirect('/')
        }
        user.email = email
        user.id = id 
        user.idnumber = idnumber
        user.bvn = bvn
        user.image = image
        user.username = username
        user.lastname= lastname
        user.firstname = firstname
        user.dob = dob
        user.phone = phone
        
        user.save(function(err){
            res.render('users/home')
        })
        
    })
    
}

