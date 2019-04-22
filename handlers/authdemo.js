const  User = require("../models/index");
const passport = require('passport')


exports.signup= function (req, res){
    var newUser = new User({
         username : req.body.username,
         firstName : req.body.firstName,
         lastName : req.body.lastName,
         email : req.body.email,
         profileimage : req.body.profileimage
      });
       
   // if(req.body.adminCode === 'secretcode123') {
   //   newUser.isAdmin = true;
   // }

    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.redirect("/users/signup");
        }
        passport.authenticate("local")(req, res, function(){
           //req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
           res.send('logged in !!!'); 
        });
    });
};