var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var multer = require('multer');
// Here I was trying to setup multer options with another variable
// var upload = multer({dest:__dirname+'/uploads/'});

var routes =   require('./routes/index');
var users =    require('./routes/users');
var uploaded = require('./routes/uploaded')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// HERE I am trying to use the var upload to handle the options object
// app.use(multer({dest:__dirname+'/uploads/'}).any());
// app.use(upload.any());


// console.log("\n\n\n\##################");
// console.log('\nmulter:\n', multer)
// console.log('\nmulter.options:\n', multer.options)

app.use('/', routes);
app.use('/users', users);
app.use('/uploaded', uploaded);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// var uploadDestination = __dirname+'/uploads/'
// var uploadDestination = '/uploads/';
var uploadDestination = 'hi';
// module.exports = {app: app,
                //   uploadDestination: uploadDestination};
module.exports = app;
// module.exports.uploadDestination = 'hi';
// module.exports.uploadDestination = uploadDestination;
