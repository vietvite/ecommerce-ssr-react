var express = require('express');
var router = express.Router();

router.get('/product', function (req, res) {
  res.end('Ok')
})

module.exports = router;