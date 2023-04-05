var express = require('express');
var router = express.Router();

/* GET sample page. */
router.get('/', function(req, res, next) {
  res.render('report', { title: '报表示例' });
});

module.exports = router;
