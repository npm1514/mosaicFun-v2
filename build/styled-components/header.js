"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoImg = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 0;\n  left: 16px;\n  bottom: 0;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  min-height: 100px;\n  background-color: #fff;\n  border-bottom: 1px solid #8d8d8d;\n  color: #000;\n  padding: 16px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].header(_templateObject());

exports.Header = Header;

var LogoImg = _styledComponents["default"].img(_templateObject2());

exports.LogoImg = LogoImg;