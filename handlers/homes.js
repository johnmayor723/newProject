const Home = require('../models/homes')




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

