//require('dotenv').config()
const express = require('express')
//const cons = require('consolidate');
const PORT =  8080
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const flash = require('flash')
const User = require("./models/users")
const LocalStrategy = require("passport-local")
const passportLocalMongoose = require("passport-local-mongoose")

const Home = require('./models/homes')

const errorHandler = require('./handlers/errors')

const usersRoutes = require('./routes/users')
const hostsRoutes = require('./routes/hosts')
const homesRoute = require('./routes/homes')
const staticRoutes = require('./routes/static')

mongoose.connect('mongodb://admin:majoje1582@ds145786.mlab.com:45786/bnbhomes2')

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('secret string'))
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(flash())

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.get("/", function(req, res){
    // Get all homes from DB
    Home.find({}, function(err, allhomes){
       if(err){
           console.log(err);
       } else {
          res.render("homepage",{homes:allhomes});
       }
    });
});

app.use('/users/',  usersRoutes)
app.use('/hosts/',  hostsRoutes)
app.use('/homes/',  homesRoute)
app.use('/', staticRoutes)



app.use(function(req, res){
    req.flash.success_message=req.flash('success_message')
    req.flash.error_message = req.flash('error_message')
})

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`server started on ${PORT}`)
})
