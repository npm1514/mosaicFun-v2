"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _HomeRoot = _interopRequireDefault(require("./roots/HomeRoot"));

var _LoginRoot = _interopRequireDefault(require("./roots/LoginRoot"));

var _NewaccountRoot = _interopRequireDefault(require("./roots/NewaccountRoot"));

var _CheckoutRoot = _interopRequireDefault(require("./roots/CheckoutRoot"));

var _OrdercompleteRoot = _interopRequireDefault(require("./roots/OrdercompleteRoot"));

var _MainRoot = _interopRequireDefault(require("./roots/MainRoot"));

var _MyaccountRoot = _interopRequireDefault(require("./roots/MyaccountRoot"));

var _userCtrl = _interopRequireDefault(require("./server/userCtrl"));

var _assetCtrl = _interopRequireDefault(require("./server/assetCtrl"));

var _config = _interopRequireDefault(require("./config/config"));

var _passport2 = _interopRequireDefault(require("./config/passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
(0, _passport2["default"])(_passport["default"]);
app.use((0, _expressSession["default"])({
  secret: _config["default"].secret,
  resave: true,
  saveUninitialized: true
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    homeBundle = "",
    loginBundle = "",
    newaccountBundle = "",
    checkoutBundle = "",
    ordercompleteBundle = "",
    mainBundle = "",
    myaccountBundle = "";

_fs["default"].readFile('./dist/js/home.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  homeBundle = data || "";
});

_fs["default"].readFile('./dist/js/login.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  loginBundle = data || "";
});

_fs["default"].readFile('./dist/js/newaccount.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  newaccountBundle = data || "";
});

_fs["default"].readFile('./dist/js/checkout.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  checkoutBundle = data || "";
});

_fs["default"].readFile('./dist/js/ordercomplete.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  ordercompleteBundle = data || "";
});

_fs["default"].readFile('./dist/js/main.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  mainBundle = data || "";
});

_fs["default"].readFile('./dist/js/myaccount.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  myaccountBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"], "home"));
});
app.get('/home', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"], "home"));
});
app.get('/login', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, _LoginRoot["default"], "login"));
});
app.get('/newaccount', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, newaccountBundle, _NewaccountRoot["default"], "newaccount"));
});
app.get('/checkout', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, checkoutBundle, _CheckoutRoot["default"], "checkout"));
});
app.get('/ordercomplete', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, ordercompleteBundle, _OrdercompleteRoot["default"], "ordercomplete"));
});
app.get('/main', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, mainBundle, _MainRoot["default"], "main"));
});
app.get('/myaccount', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, myaccountBundle, _MyaccountRoot["default"], "myaccount"));
});
app.get('/health', function (req, res) {
  return res.send('OK');
});
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.get('/userCtrl', _userCtrl["default"].getme);
app.post('/userCtrl', _passport["default"].authenticate('local-signup'), _userCtrl["default"].login);
app.put('/userCtrl/:id', _userCtrl["default"].update);
app["delete"]('/userCtrl/:id', _userCtrl["default"]["delete"]);
app.get('/userCtrl/logout', _userCtrl["default"].logout);
app.get('/assetCtrl', _assetCtrl["default"].read);
app.get('/assetCtrl/:id', _assetCtrl["default"].getOne);
app.post('/assetCtrl', _assetCtrl["default"].create);
app.put('/assetCtrl/:id', _assetCtrl["default"].update);
app["delete"]('/assetCtrl/:id', _assetCtrl["default"]["delete"]);
app.get('/*', function (req, res) {
  return res.send('ERROR');
});
var mongoUri = 'mongodb://' + _config["default"].userDB + ':' + _config["default"].passDB + '@ds063134.mlab.com:63134/mosaic-fun';

_mongoose["default"].connect(mongoUri);

_mongoose["default"].connection.on('error', console.error.bind(console, 'connection error'));

_mongoose["default"].connection.once('open', function () {
  console.log("Connected to mongoDB");
});

app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles(_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <title>Mosaic Fun - ".concat(title, "</title>\n                <meta name=\"Description\" content=\"Mosaic Fun - ").concat(title, "\">\n                <style>\n                  body { margin: 0; font-family: 'Roboto'; }\n                  a { text-decoration: none; color: #000; }\n                </style>\n                <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\" />\n                ").concat(styles, "\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script src=\"https://html2canvas.hertzen.com/dist/html2canvas.min.js\"></script>\n                <script src=\"https://unpkg.com/jspdf@latest/dist/jspdf.min.js\"></script>\n                <script>").concat(bundle, "</script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}