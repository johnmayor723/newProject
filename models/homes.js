var mongoose = require("mongoose");

var homeSchema = new mongoose.Schema({
   price: Number,
   title: String,
   image:[ {
      type:String
      }] ,
   description: String,
   user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User'
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Host"
      }
   ]
});

module.exports = mongoose.model("Home", homeSchema);