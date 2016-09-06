// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');


app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
//app.enable('view cache');
app.locals.pretty = true;
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// setup the logger
app.use(morgan('combined'));
app.use(clientErrorHandler);

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}


var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================
require('./routes/')(app);

// START THE SERVER
// =============================================================================
app.listen(port, function () {  
    console.log('App listening on port '+port+'!')
})