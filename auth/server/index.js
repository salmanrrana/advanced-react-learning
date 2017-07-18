//Main starting poit of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB Setup
mongoose.createConnection('mongodb://localhost/auth/auth');

// App Setup
////About getting express working the way we want it to

//morgan and bodyParser are middleware
//any incoming request passes through morgan and bodyparser.
// that is what app.use does

// morgan is a logging framework and is used right now for debugging
app.use(morgan('combined'));
// bodyparser is used to parse incoming request as JSON, no matter what the request type is
app.use(bodyParser.json({ type: '*/*' }));
//calling the router with our app
router(app);


// Server Setup
////the way that we want the server to communicate to the outside world

const port = process.env.PORT || 3090;

//http is a native node library
//it creates an http server that receives requests and
//then anything that comes in, forward to our express application
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on: ', port);
