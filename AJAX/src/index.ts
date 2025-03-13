// const express = require('express');

import express from 'express';
import bodyParser from 'body-parser'
import { router } from './routes/router.js';

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/src/views');

app.use('/', router);




// request -> HTTP Request
// response -> HTTP Response we will give back
// app.get('/hello',  // Route -> GET /hello
    
    
//    (request, response) => { // Controller function to handle / respond to the request
    // console.log(request)
//     response.
    
//     send("Hello World Again !!!!") // View -> HTML pages we want to display to the user
//})

app.listen(port, () => {
    console.log(`Example App listening on port ${port}`);
})
















// The code below is for vanilla node servers


// // npm install @types/node
// import { createServer } from 'node:http';

// const server = createServer((req: any, res: any) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// // run with `node server.mjs`
