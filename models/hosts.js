const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

const hostSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    comments:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Comment'
    },
    bankname:String,
    accountnumber:Number,
    homes:[{
         id :{
           type:mongoose.Schema.Types.ObjectId,
           ref:'Home'
       } ,
       images:[
           { type:String }
           ],
       title:String
    }]
})

hostSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Host", hostSchema);