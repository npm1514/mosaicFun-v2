"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Asset = new _mongoose["default"].Schema({
  date: {
    type: String,
    required: true
  },
  construction: {
    type: String,
    required: true
  }
});
var _default = Asset;
exports["default"] = _default;