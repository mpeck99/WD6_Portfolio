var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');
var Wishlist = require('../models/wishlist');
/* GET home page. */
router.get('/', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function (err,docs) {
      res.render('shop/index', { title: 'WD6', products: docs, successMsg : successMsg, noMessage: !successMsg});
  });
});

router.get('/add-to-cart/:id',function (req,res,next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId,function (err,product) {
    if(err){
      return res.redirect('/');
    }
    cart.add(product,product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});
router.get('/add-to-wish-list/:id',function (req,res,next) {
  var productId = req.params.id;
  var wishlist = new Wishlist(req.session.wishlist ? req.session.wishlist : {});

  Product.findById(productId,function (err,product) {
    if(err){
      return res.redirect('/');
    }
    wishlist.add(product,product.id);
    req.session.wishlist = wishlist;
    console.log(req.session.wishlist);
    res.redirect('/');
  });
});
router.get('/reduce/:id',function (req,res,next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});
router.get('/remove/:id',function (req,res,next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});
router.get('/wishlist',function (req,res,next) {
  if(!req.session.wishlist){
    res.render('shop/wish-list',{products:null});
  }
  else{
    var wishlist= new Wishlist(req.session.wishlist);
    res.render('shop/wish-list',{products:wishlist.generateArray(),totalPrice:wishlist.price});
  }
});
router.get('/shopping-cart',function (req,res,next) {
  if(!req.session.wishlist){
    res.render('shop/shopping-cart',{products:null});
  }
  else{
  var cart = new Cart(req.session.wishlist);
  res.render('shop/shopping-cart',{products:cart.generateArray()});
  }
});
router.get('/checkout',function (req,res,next) {
//  var errMsg = new req.flash('error')[0];
  if(!req.session.cart){
    res.redirect('shopping-cart');
  }
  var cart = new Cart(req.session.cart);

  res.render('shop/checkout',{total:cart.totalPrice});
});

router.post('/checkout',function (req,res,next) {
  if(!req.session.cart){
    res.redirect('shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var stripe = require("stripe")("sk_test_HHstfepx1OdA0e9HjPgPbPEV");

  stripe.charges.create({
    amount: cart.totalPrice * 100,
    currency: 'usd',
    description: 'WD6 Charge',
    source: req.body.stripeToken,
  }, function (err,charge) {
    if(err){
     // req.flash('error',err.message);
      return res.redirect('/checkout');
    }
    req.session.cart = null;
    req.flash('success', 'Checkout Successful!');
    res.redirect('/');
  });
});
module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}