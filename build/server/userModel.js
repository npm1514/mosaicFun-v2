"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var _assetModel = _interopRequireDefault(require("./assetModel"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = new _mongoose["default"].Schema({
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  assets: [_assetModel["default"]]
});

User.methods.generateHash = function (password) {
  return _bcryptNodejs["default"].hashSync(password, _bcryptNodejs["default"].genSaltSync(8), null);
};

User.methods.validPassword = function (password) {
  return _bcryptNodejs["default"].compareSync(password, _this.password);
};

var _default = _mongoose["default"].model('User', User);

exports["default"] = _default;