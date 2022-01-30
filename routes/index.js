var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'dotenv-example',
    message: process.env.MESSAGE || 'No Message, No App!',
   });
});

module.exports = router;
