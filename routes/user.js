var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var csrfProtection = csrf();

router.use(csrfProtection);
router.get('/profile', isLoggedIn,function (req, res,next) {
  res.render('user/profile');
});

router.get('/logout',function (req,res,next) {
  req.logOut();
  res.redirect('/');
});

router.use('/',notLoggedIn,function (req,res,next) {
  next();
});
router.get('/signup',function (req,res,next) {
  var messages = req.flash('error');
  res.render('user/signup',{ csrfToken: req.csrfToken(),messages:messages,hasErrors:messages.length>0});
});

router.post('/signup',passport.authenticate('local.signup',{
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/signin',function (req,res,next) {
  var messages = req.flash('error');
  res.render('user/signin',{ csrfToken: req.csrfToken(),messages:messages,hasErrors:messages.length>0});
});

router.post('/signin',passport.authenticate('local.signin',{
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));
router.get('/profile',isLoggedIn,function (req,res,next) {
//  var errMsg = new req.flash('error')[0];
  if(!req.session.cart){
    res.redirect('/user/profile');
  }
  var cart = new Cart(req.session.cart);

  res.render('shop/checkout',{total:cart.totalPrice});
});
module.exports = router;

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}
function notLoggedIn(req,res,next){
  if(!req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}