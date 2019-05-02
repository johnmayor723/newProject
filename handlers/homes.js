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
    let title = req.body.title;
    let image1 = req.body.image1
    let image2 = req.body.image2
    let image3 = req.body.image3
    let images = []
    images.push(image1)
    images.push(image2)
    images.push(image3)
    let description = req.body.description;
    let country = req.body.country
    let city = req.body.city
    let state = req.body.state
    let address = req.body.address
    let phone = req.body.phone
    //let bankname = req.body.bankname
    //let accountnumber = req.body.accountnumber
    let author = {
        id: req.user._id,
        username: req.user.username
    }
    var newHost = {
        title,
        images,
        description,
        country,
        city,
        state,
        address,
        phone,
        //bankname,
       // accountnumber,
        author
        
    }
    // Create a new home and save to DB
    Home.create(newHost, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to  homepage
            Home.find({}, function(err, homes){
                //req.session.valid = true
                //let user = req.user.id
                //req.session.user = user
               // let userHomes =homes.filter((home)=> home.id == user)
               let userHomes = []
               for(var i =0; i< homes.length;i++){
                   if(homes[i].id === req.user.id){
                       userHomes.push(homes[i])
                   }
               }
                if(err){
                    console.log(err)
                }
                return  res.render("users/home", {user:req.user, userHomes} );
            })
           
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

exports.updateHomes = function(req, res){
    Home.findById(req.params.id, req.body, function(err, home){
         
    })
}




