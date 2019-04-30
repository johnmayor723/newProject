const Home = require('../models/homes')



exports.showHomes = function(req, res){
    //find the home with provided ID
    Home.findById(req.params.id).populate("comments").exec(function(err, foundHome){
        if(err){
            console.log(err);
        } else {
            console.log(foundHome)
            //render show template with that home
            res.render("homes/show", {home: foundHome});
        }
    });
}

exports.getNewHomes = function (req, res){
    res.render('homes/new')
}

exports.createHomes = function(req, res){
    // get data from form and add to campgrounds array
    var title = req.body.title;
    var image = req.body.image;
    var desc = req.body.description;
    var newHost = {title: title, image: image, description: desc}
    // Create a new home and save to DB
    Home.create(newHost, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to  homepage
            res.redirect("/");
        }
    });
}

exports.searchHomes = function(req, res){
    
    function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
    
     if (req.query.search) {
       const regex = new RegExp(escapeRegex(req.query.search), 'gi');
       Home.find({ "name": regex }, function(err, home) {
           if(err) {
               console.log(err);
           } else {
              res.render("/", {home: home});
           }
       }); 
    }
}

