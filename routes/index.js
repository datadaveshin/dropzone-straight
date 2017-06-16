"use strict";

var express = require('express');
var router = express.Router();
            //   var app = require('../app').app;
// var theDestination = require('./users').uploadDestination;
// var theDestination = require('../app').uploadDestination;
console.log(__dirname)
var theDestination = __dirname.slice(0, -6) + 'uploads/'
console.log('theDestination:', theDestination)


function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var sessionString;

// HERE I put multer middlewear so that can only upload from the index route
// per warning in the
var multer = require('multer');
// var upload = require('../')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, theDestination)
    },
    filename: function (req, file, cb) {
        // console.log(req.body)
        // cb(null, file.originalname + '-' + Date.now())
        cb(null,  sessionString + '_' + file.originalname)
    }
})

var upload = multer({
    // dest:__dirname+'/uploads/',
    storage: storage
});

// HERE this prevents uploading to any route other than /uploading
router.use('/uploading', upload.any());


/* GET home page. */
router.get('/', function(req, res, next) {
  sessionString = makeid()
  res.render('index', { title: 'Sibyls', msg: "yo" });
});

// HERE I tried to use var upload to change delivery to an array
// but I think it needs to work in conjunction with dropzone
 // router.post('/uploading', upload.array(), function (req, res) {
router.post('/uploading', function (req, res) {
    //console.log(req.files);

    // upload.any();
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

    // fs.readFile(req.files.path, function (err, data) {
    //   if (err) throw err;
    //   // data will contain your file contents
    //   console.log(data)
    //
    //   // delete file
    //   fs.unlink(req.files.path, function (err) {
    //     if (err) throw err;
    //     console.log('successfully deleted ' + req.files.path);
    //   });
    // });

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
    console.log("It worked yo yo");
    console.log("Here's the session string:", sessionString);

    // fs.readFile(req.files.path, function (err, data) {
    //   if (err) throw err;
    //   // data will contain your file contents
    //   console.log(data)
    //
    //   // delete file
    //   fs.unlink(req.files.path, function (err) {
    //     if (err) throw err;
    //     console.log('successfully deleted ' + req.files.path);
    //   });
    // });


    res.json("processed")

});

module.exports = router;
