var express = require('express');
var router = express.Router();

/* GET sample page. */
router.get('/', function(req, res, next) {
  res.render('sample', { title: '官方示例' });
});

module.exports = router;
