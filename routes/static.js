const express = require('express')
var router  = express.Router();

router.get('about', function(req, res){
    res.render('about')
})
router.get('contact', function(req, res){
    res.render('contact')
})
router.get('faq', function(req, res) {
     let user = req.session.user
    res.render('faq' ,{user:user})
})
router.get('help', function(req, res) {
    res.render('help')
})

module.exports = router;