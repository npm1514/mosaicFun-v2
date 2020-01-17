"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userModel = _interopRequireDefault(require("./userModel"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  login: function login(req, res) {
    return res.send();
  },
  read: function read(req, res) {
    _userModel["default"].find(req.query).exec(function (err, result) {
      if (err) res.send(err);
      res.send(result);
    });
  },
  update: function update(req, res) {
    _userModel["default"].findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.send(err);
      res.send(result);
    });
  },
  "delete": function _delete(req, res) {
    _userModel["default"].findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) res.send(err);
      console.log(req.params.id + " has been deleted");
      res.send(result);
    });
  },
  getme: function getme(req, res) {
    if (!req.User) return res.send();

    _userModel["default"].findById(req.User._id).exec(function (err, result) {
      if (err) return res.send(err);
      res.send(result);
    });
  },
  logout: function logout(req, res) {
    var user = req.user.email;
    req.logout();
    console.log(user + " has been logged out");
    res.send(user + " has been logged out");
  }
};
exports["default"] = _default;