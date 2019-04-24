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
    hosts:{
        type:mongoose.Schema.Types.ObjectId,
       ref:'Host'
    }
})

hostSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Host", hostSchema);