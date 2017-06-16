var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var uploadDestination = 'hi';

module.exports = router;
module.exports.uploadDestination = uploadDestination;
