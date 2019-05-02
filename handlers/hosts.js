const Host = require("../models/hosts");
//const jwt = require("jsonwebtoken");
const passport = require('passport')
const Home = require('../models/homes')


exports.hosthome = function(req, res){
     console.log(req.session.user)
      var host = req.session.user
      Home.find({}, function(err, allhomes){
       if(err){
           console.log(err);
       } else {
          res.render('hosts/home' , {host: host, homes :allhomes});
       }
    });
}



exports.signup = function(req, res){
     Host.register(new Host({
         username: req.body.username, 
         email:req.body.email,
         firstname:req.body.firstname,
         lastname:req.body.lastname,
         bankname:req.body.bankname,
         accountnumber:req.body.accountnumber
     }),
         req.body.password,
         function(err, host){
        if(err){
            console.log(err);
            return res.send('failure');
        }
        passport.authenticate("local")(req, res, function(){
           res.render("hosts/home", {host:host});
           console.log(host)
        });
    });
}
