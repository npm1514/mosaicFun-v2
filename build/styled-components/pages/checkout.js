"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckoutContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: calc(100% - 32px);\n    padding: 16px;\n    min-height: 300px;\n    text-align: center;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckoutContent = _styledComponents["default"].div(_templateObject());

exports.CheckoutContent = CheckoutContent;