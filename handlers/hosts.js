const Host = require("../models/hosts");
//const jwt = require("jsonwebtoken");
const passport = require('passport')


exports.hosthome = function(req, res){
    res.render('hosts/home')
}



exports.signup = function(req, res){
     Host.register(new Host({username: req.body.username, email:req.body.email}), req.body.password, function(err, host){
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
