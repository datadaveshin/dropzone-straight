var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sibyls', msg: "yo" });
});

router.post('/uploading', function (req, res) {
    //console.log(req.files);

    var files = req.files.file;
    if (Array.isArray(files)) {
        // response with multiple files (old form may send multiple files)
        console.log("\n\nGot " + files.length + " files");
        console.log("the req.files:")
        console.log(req.files)
        console.log("\nthe req.files.file:")
        console.log(req.files.file)
    }
    else {
        // dropzone will send multiple requests per default
        console.log("\n\nGot one file");
        console.log("the req.files:")
        console.log(req.files)
        // console.log("\nthe req.files.file:")
        // console.log(req.files.file)
        // console.log("\nthe res:")
        // console.log(res)
    }
    // res.sendStatus(200);

    console.log("DONE!")
    // req.method = 'get';
    // res.redirect(200, '/uploaded')
    // res.render('index', {msg: "hi"})
    // res.render('index', { title: 'Done' });
    // var responseText = req.files[0].originalname
    var responseText = req.files[0].filename + " and " + req.files[0].originalname + "!"
    res.json(responseText)
    // res.send("Upload Complete")
});

router.get('/process', function (req, res) {
    console.log("fuckin' worked yo yo");

    res.json("processed")

});

module.exports = router;
