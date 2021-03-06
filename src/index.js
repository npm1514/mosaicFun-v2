import express from "express";
import fetch from "node-fetch";
import fs from 'fs';
import compression from 'compression';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components';
import passport from 'passport';
import session from 'express-session';
import mongoose from 'mongoose';

import HomeRoot from "./roots/HomeRoot";
import LoginRoot from "./roots/LoginRoot";
import NewaccountRoot from "./roots/NewaccountRoot";
import CheckoutRoot from "./roots/CheckoutRoot";
import OrdercompleteRoot from "./roots/OrdercompleteRoot";
import MainRoot from "./roots/MainRoot";
import MyaccountRoot from "./roots/MyaccountRoot";

import userCtrl from './server/userCtrl';
import assetCtrl from './server/assetCtrl';
import config from './config/config';
import passportInit from './config/passport';

var PORT = process.env.PORT || 3003;

const app = express();
passportInit(passport);

app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var dataObj = {},
homeBundle = "",
loginBundle = "",
newaccountBundle = "",
checkoutBundle = "",
ordercompleteBundle = "",
mainBundle = "",
myaccountBundle = "";

fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
fs.readFile('./dist/js/login.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  loginBundle = data || "";
})
fs.readFile('./dist/js/newaccount.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  newaccountBundle = data || "";
})
fs.readFile('./dist/js/checkout.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  checkoutBundle = data || "";
})
fs.readFile('./dist/js/ordercomplete.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  ordercompleteBundle = data || "";
})
fs.readFile('./dist/js/main.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  mainBundle = data || "";
})
fs.readFile('./dist/js/myaccount.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  myaccountBundle = data || "";
})

app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});
app.get('/home', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});
app.get('/login', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, LoginRoot, "login"));
});
app.get('/newaccount', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, newaccountBundle, NewaccountRoot, "newaccount"));
});
app.get('/checkout', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, checkoutBundle, CheckoutRoot, "checkout"));
});
app.get('/ordercomplete', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, ordercompleteBundle, OrdercompleteRoot, "ordercomplete"));
});
app.get('/main', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, mainBundle, MainRoot, "main"));
});
app.get('/myaccount', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, myaccountBundle, MyaccountRoot, "myaccount"));
});
app.get('/health', (req, res) => res.send('OK'));

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});


app.get('/userCtrl', userCtrl.getme);
app.post('/userCtrl', passport.authenticate('local-signup'), userCtrl.login);
app.put('/userCtrl/:id', userCtrl.update);
app.delete('/userCtrl/:id', userCtrl.delete);
app.get('/userCtrl/logout', userCtrl.logout);

app.get('/assetCtrl', assetCtrl.read);
app.get('/assetCtrl/:id', assetCtrl.getOne);
app.post('/assetCtrl', assetCtrl.create);
app.put('/assetCtrl/:id', assetCtrl.update);
app.delete('/assetCtrl/:id', assetCtrl.delete);
app.get('/*', (req, res) => res.send('ERROR'))

var mongoUri = 'mongodb://'+config.userDB+':'+config.passDB+'@ds063134.mlab.com:63134/mosaic-fun';
mongoose.connect(mongoUri);
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Mosaic Fun - ${title}</title>
                <meta name="Description" content="Mosaic Fun - ${title}">
                <style>
                  body { margin: 0; font-family: 'Roboto'; }
                  a { text-decoration: none; color: #000; }
                </style>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                ${styles}
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
                <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
                <script>${bundle}</script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
