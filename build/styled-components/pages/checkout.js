"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderList = exports.CheckoutContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: max-content;\n    padding: 32px;\n    margin: auto;\n    text-align: center;\n    border: 1px solid #8d8d8d;\n    border-radius: 4px;\n    button {\n      display: block;\n      padding: 12px;\n      font-size: 18px;\n      width: 300px;\n      margin: 12px auto;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

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

var OrderList = _styledComponents["default"].div(_templateObject2());

exports.OrderList = OrderList;