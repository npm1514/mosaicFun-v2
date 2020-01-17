"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _assetModel = _interopRequireDefault(require("./assetModel"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  read: function read(req, res) {
    _assetModel["default"].exec(function (err, result) {
      if (err) res.send(err);
      res.send(result);
    });
  },
  getOne: function getOne(req, res) {
    if (!req.Asset) return res.send();

    _assetModel["default"].findById(req.Asset._id).exec(function (err, result) {
      if (err) return res.send(err);
      res.send(result);
    });
  },
  create: function create(req, res) {
    var asset = new _assetModel["default"](req.body);
    asset.save(function (err, result) {
      if (err) res.send(err);
      res.send(result);
    });
  },
  update: function update(req, res) {
    _assetModel["default"].findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) return res.send(err);
      res.send(result);
    });
  },
  "delete": function _delete(req, res) {
    _assetModel["default"].findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) res.send(err);
      console.log(req.params.id + " has been deleted");
      res.send(result);
    });
  }
};
exports["default"] = _default;