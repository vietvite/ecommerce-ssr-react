const express = require('express');
const router = express.Router();
const product = require('../models/product')

router.post('/', function (req, res) {
  const savedProduct = product.addOne(req.body)
  res.status(200).json({ data: savedProduct })
})

router.get('/feed', function (req, res) {
  res.status(200).json({ data: product.feed() })
})


module.exports = router;
