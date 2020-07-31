var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// API routes
router.use('/api/product', require('./product'));
router.use('/api/category', require('./category'));

module.exports = router;