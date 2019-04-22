require('dotenv').config()
const express = require('express')
const cons = require('consolidate');
const PORT =  8080
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const User = require("./models/users")
const LocalStrategy = require("passport-local")
const passportLocalMongoose = require("passport-local-mongoose")

const errorHandler = require('./handlers/errors')

const app = express()

const usersRoutes = require('./routes/users')


mongoose.connect('mongodb://admin:majoje1582@ds151805.mlab.com:51805/bnbhomes')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//

app.use(bodyParser.urlencoded({extended: true}));
// view engine setup
//app.engine('html', cons.swig)
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

//app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.get('/', function(req,res, next){
    res.render('homepage')
})
app.get('/signup', function(req, res){
    res.render('users/signup')
})
app.use('/users/',  usersRoutes)

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`server started on ${PORT}`)
})
