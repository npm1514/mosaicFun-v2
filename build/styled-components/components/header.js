"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = exports.HeaderOrg = exports.LogoImg = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: max-content;\n  width: max-content;\n  display: block;\n  color: #000;\n  font-size: 32px;\n  margin: 0 12px;\n  &:hover {\n    opacity: 0.7;\n    text-decoration: none;\n    color: #000;\n  }\n  &:visited {\n    color: #000;\n  }\n  &:active {\n    color: #000;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 100px);\n  height: 100px;\n  margin-left: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  span {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 100px;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 16px;\n  bottom: 0;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  height: 100px;\n  background-color: #fff;\n  border-bottom: 1px solid #8d8d8d;\n  color: #000;\n  padding: 16px;\n  position: relative;\n"]);

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

var HeaderOrg = _styledComponents["default"].div(_templateObject3());

exports.HeaderOrg = HeaderOrg;

var NavLink = _styledComponents["default"].a(_templateObject4());

exports.NavLink = NavLink;