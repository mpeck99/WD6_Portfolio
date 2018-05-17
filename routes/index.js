var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function (err,docs) {

      res.render('shop/index', { title: 'WD6', products: docs});
  });
});

module.exports = router;