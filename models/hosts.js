const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://admin:majoje1582@ds151805.mlab.com:51805/bnbhomes')

module.exports.User = require("./users");