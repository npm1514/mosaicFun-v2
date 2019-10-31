"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _NewaccountPage = _interopRequireDefault(require("../pages/NewaccountPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (window) (0, _reactDom.render)(_react["default"].createElement(_NewaccountPage["default"], {
  data: window.__DATA__
}), document.getElementById('app'));