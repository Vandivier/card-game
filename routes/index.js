var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Card Game' });
});
router.get('/api/draw/', function(req, res, next) {
  res.render('index', { title: 'Card Game' });
});

module.exports = router;
