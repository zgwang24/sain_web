var express = require('express');
var router = express.Router();

/* GET salesman page. */
router.get('/salesman', function(req, res, next) {
  res.render('salesman');
});

/* GET admin page. */
router.get('/admin', function(req, res, next) {
  res.render('admin');
});

/* GET recordEnter page. */
router.get('/recordEnter', function(req, res, next) {
  res.render('recordEnter');
});

/* GET recordShow page. */
router.get('/recordShow', function(req, res, next) {
  res.render('recordShow');
});

module.exports = router;
