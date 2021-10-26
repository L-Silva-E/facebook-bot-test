// 'use strict';
// require('dotenv').config();

// // Imports dependencies and set up http server
// const
//   express = require('express'),
//   bodyParser = require('body-parser'),
//   app = express().use(bodyParser.json()); // creates express http server

// // Sets server port and logs message on success
// app.listen(process.env.PORT || 8000, () => console.log('webhook is listening'));


// app.get('/', (req, res) => {
//   res.end("Hola mundo");
// });


// // Creates the endpoint for our webhook 
// app.post('/webhook', (req, res) => {
//   let body = req.body;

//   // Checks this is an event from a page subscription
//   if (body.object === 'page') {

//     // Iterates over each entry - there may be multiple if batched
//     body.entry.forEach(function(entry) {

//       // Gets the message. entry.messaging is an array, but 
//       // will only ever contain one message, so we get index 0
//       let webhook_event = entry.messaging[0];
//       console.log(webhook_event);
//     });

//     // Returns a '200 OK' response to all requests
//     res.status(200).send('EVENT_RECEIVED');
//   } else {
//     // Returns a '404 Not Found' if event is not from a page subscription
//     res.sendStatus(404);
//   }
// });


// // Adds support for GET requests to our webhook
// app.get('/webhook', (req, res) => {

//   // Your verify token. Should be a random string.
//   // FACEBOOK_TOKEN_ACCESS=EAADn1fa1VPsBAMpyomaZA8jqgQLBuDY1QVqOftKHhxVUZACOlIbiRylwmPAtC5OEzCwVqf4dRILSbdgUZAtvvZAdUQFpSZCZB85ndXEL4X59TLvYLHE8cZAbuE1IQ8ZBI8XlMGSZCbIBUqhkas0duMCeITMt0a5ZByQH9a1UaBWEACWMOMljvDtiDS
//   let VERIFY_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

//   // Parse the query params
//   let mode = req.query['hub.mode'];
//   let token = req.query['hub.verify_token'];
//   let challenge = req.query['hub.challenge'];

//   // Checks if a token and mode is in the query string of the request
//   if (mode && token) {

//     // Checks the mode and token sent is correct
//     if (mode === 'subscribe' && token === VERIFY_TOKEN) {

//       // Responds with the challenge token from the request
//       console.log('WEBHOOK_VERIFIED');
//       res.status(200).send(challenge);

//     } else {
//       // Responds with '403 Forbidden' if verify tokens do not match
//       res.sendStatus(403);
//     }
//   }
// });


// ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** 

// require("dotenv").config();
// import express from "express";
// import * as viewEngine from "./config/viewEngine.cjs";
// import * as initWebRoute from "./routes/web.js";
// import bodyParser from "body-parser";

// let app = express();

// // config view engine
// viewEngine(app);

// //use body-parser to post data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // init all web routes
// initWebRoute(app);

// let port = process.env.PORT || 8080;

// app.listen(port, ()=>{
//    console.log(`App is running at the port ${port}`) ;
// });


// ********** ********** ********** ********** ********** ********** ********** ********** ********** **********


// const http = require('http');
// const fs = require('fs');
// const port = 8000;

// const server = http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   fs.readFile('index.html', function(error, data){
//     if(error){
//       res.writeHead(400);
//       res.write('Error: File Not Found.');
//     }else{
//       res.write(data);
//     }
//     res.end();
//   });
// });

// server.listen(port, function(error){
//   if(error){
//     console.log('Something went wrong', error);
//   }else{
//     console.log('Server is listening on port ' + port);
//   }
// });





// ********** ********** ********** ********** ********** ********** ********** ********** ********** **********





'use strict';

const { response } = require('express');

// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

// Sets server port and logs message on success
app.listen(process.env.PORT || 8080, () => console.log('webhook is listening'));


app.get('/', (req, res) => {
  res.render('index');
});


// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {

  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {
      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});



// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "EAADn1fa1VPsBAMpyomaZA8jqgQLBuDY1QVqOftKHhxVUZACOlIbiRylwmPAtC5OEzCwVqf4dRILSbdgUZAtvvZAdUQFpSZCZB85ndXEL4X59TLvYLHE8cZAbuE1IQ8ZBI8XlMGSZCbIBUqhkas0duMCeITMt0a5ZByQH9a1UaBWEACWMOMljvDtiDS"

  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {

    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});
