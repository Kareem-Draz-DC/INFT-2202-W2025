// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser'
import { router } from './routes/router.js';
import { connectToMongo } from './database/connect.js'
import dotenv from 'dotenv'
import { initializePassportMiddleware } from './auth/passport-jwt.js';

const app = express();
dotenv.config(); // This config method loads the environment variables from the .env file into the process.env global variable

const port = process.env.SERVER_PORT;

let mongoConnectionString = process.env.MONGO_CONNECTION_STRING || ''
connectToMongo(mongoConnectionString) // This method is imported from database/connect.js and connects to our database
initializePassportMiddleware()
// The middleware below parses the body of the incoming POST HTTP request so that it is in the JSON format when we work with it in our controllers
app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())
app.use(express.json())

app.set('view engine', 'ejs'); // This middleware sets our template engine to EJS 
app.set('views', process.cwd() + '/src/views'); // This middleware sets our views folder as the dedicated folder for all our .ejs files

app.use('/', router); // This middleware re-routes all routes that match the '/' to the touter object defined in our routes folder

// The line below is what makes our app listen on an active port !
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
