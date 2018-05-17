var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var csrfProtection = csrf();
var Product = require('../models/product');
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function (err,docs) {

      res.render('shop/index', { title: 'WD6', products: docs});
  });

});

router.get('/user/signup',function (req,res,next) {
  var messages = req.flash('error');
  res.render('user/signup',{ csrfToken: req.csrfToken(),messages:messages,hasErrors:messages.length>0});
});

router.post('/user/signup',passport.authenticate('local.signup',{
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/user/profile',function (req, res,next) {
  res.render('user/profile');
});
module.exports = router;

router.get('/user/signin',function (req,res,next) {
  var messages = req.flash('error');
  res.render('user/signin',{ csrfToken: req.csrfToken(),messages:messages,hasErrors:messages.length>0});
});

router.post('/user/signin',passport.authenticate('local.signin',{
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}))