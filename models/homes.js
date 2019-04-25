var mongoose = require("mongoose");

var homeSchema = new mongoose.Schema({
   price: Number,
   title: String,
   image:[ {
      type:String
      }] ,
   description: String,
   hosts:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Host'
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Home", homeSchema);