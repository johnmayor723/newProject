const express = require('express')
const cons = require('consolidate');
const PORT =  8080
const path = require('path')

const app = express()


// view engine setup
//app.engine('html', cons.swig)
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// routes
app.get('/', function(req,res, next){
    res.render('index')
})

app.listen(PORT, function(){
    console.log(`server started on ${PORT}`)
})
