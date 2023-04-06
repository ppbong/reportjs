var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET sample page. */
router.get('/', function(req, res, next) {
  res.render('report', { title: '报表示例' });
});

// router.post('/topdf', function(req, res, next) {
//   var html = req.body.html;

//   fs.writeFile('temp.html', html, (err) => {
//     if (err) throw err;
// wkhtmltopdf temp.html temp.pdf
//     res.send('done')
//   })
// })

module.exports = router;
