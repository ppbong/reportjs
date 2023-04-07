var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('custom', { title: '官方客户化示例' });
});

module.exports = router;
