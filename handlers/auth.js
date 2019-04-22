const User = require("../models/users");
const jwt = require("jsonwebtoken");


exports.userhome = function(req, res){
    res.render('users/home')
}

exports.signin =  function(req, res, next) {
  // finding a user

};

exports.signup = function(req, res, next) {
 let email = req.body.email
 let password = req.body.password
 let userName = req.body.username
 let firstName = req.body.firstname
 let lastName = req.body.lastname
 let profileImage = req.body.profileImage
 User.register(new User({email,userName,profileImage,firstName,lastName}), password, function(err, user){
   if(err){
     res.redirect('/')
     console.log(err)
   }
   res.send('hi')
 })
};
