var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    image:[{
        type:String
    }],
    bvn:{
        type:Number
    },
    id:{
        type:String
    },
    idnumber:{
        type:Number
    },
    username:{
        type:String,
        unique:true,
        required:true
        
    },
    password: {
        type:String,
        required:true
    },
    email: {
        type:String,
        unique:true,
        required:true
        
    },
    phone:{
       type:Number 
    },
    
    dob:{
        type:Number
    },
    
    comments:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Comment'
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);