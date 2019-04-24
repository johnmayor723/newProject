var Home = require('../models/homes');

var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:majoje1582@ds145786.mlab.com:45786/bnbhomes2')

var homes = [
    new Home({
        image: 'https://farm4.staticflickr.com/3497/3949681669_c8e8da2819.jpg',
        title: 'my bread and breakfast...Magodo Lagos',
        description: 'Come and stay in my home',
        price: 30
    }),
    new Home({
        image: 'https://farm2.staticflickr.com/1365/5148595349_83c1cbcb7c.jpg',
        title: 'victoria island Lagos',
        description: 'a lovely room in a lovely apartment right in victoria, are you a nature lover? we are right next to the exotic beaches of lagos ...',
        price:50
    }),
   new Home({
        image: 'https://farm2.staticflickr.com/1365/5148595349_83c1cbcb7c.jpg',
        title: 'victoria island Lagos',
        description: 'a lovely room in a lovely apartment right in victoria, are you a nature lover? we are right next to the exotic beaches of lagos ...',
        price:50
    }),
    new Home({
        image: 'https://farm4.staticflickr.com/3365/3255699459_7fc3826442.jpg',
        title: 'ikoyi homes',
        description: 'come have a slendid stay in my ikoyi home',
        price: 150
    }),
    new Home({
        image: 'https://farm6.staticflickr.com/5217/5525758845_62b4a88ae3.jpg',
        title: 'Studio Room',
        description: 'I have here a studio apartment ,furnished to taste. have a lovely and and a comfortable stay in my casa!',
        price: 78
    }),
    new Home({
        image: 'https://farm3.staticflickr.com/2297/2418927325_5a6a8e905f.jpg',
        title: 'ikeja Gra home',
        description: 'Lovely Bed for you in a lovely home right in the heart of lagos at GRA ikeja!',
        price: 50
    })
];

var done = 0;
for (var i = 0; i < homes.length; i++) {
    homes[i].save(function(err, result) {
        done++;
        if (done === homes.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}