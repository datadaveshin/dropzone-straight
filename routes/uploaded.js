// "use strict";
// var express = require('express');
// var router = express.Router();
//
// router.get('/', (req, res) => {
//     res.send('Uploaded something')
// });
//
// module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with an uploaded');
});

module.exports = router;
