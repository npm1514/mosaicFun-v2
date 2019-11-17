"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileMenu = exports.NavLink = exports.HeaderOrg = exports.LogoImg = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100px;\n  right: 16px;\n  background-color: #fff;\n  border: 1px solid #8d8d8d;\n  border-radius: 4px;\n  padding: 8px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: flex-end;\n  a {\n    margin: 8px auto;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: max-content;\n  width: max-content;\n  display: block;\n  color: ", ";\n  font-size: 20px;\n  margin: 0 12px;\n  &:hover {\n    opacity: 0.7;\n    text-decoration: none;\n    color: ", ";\n  }\n  &:visited {\n    color: ", ";\n  }\n  &:active {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - ", ");\n  height: ", ";\n  margin-left: ", ";\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  span {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  @media (min-width: 580px){\n    display: flex;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 16px;\n  bottom: 0;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  height: ", ";\n  background-color: #fff;\n  border-bottom: 1px solid #8d8d8d;\n  color: ", ";\n  padding: 16px;\n  position: relative;\n  #menuIcon {\n    top: 16px;\n    right: 16px;\n    position: absolute;\n  }\n  @media (min-width: 580px) {\n    #menuIcon {\n      display: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var headerSize = '60px';
var textColor = "#303030";

var Header = _styledComponents["default"].header(_templateObject(), headerSize, textColor);

exports.Header = Header;

var LogoImg = _styledComponents["default"].img(_templateObject2(), headerSize, headerSize);

exports.LogoImg = LogoImg;

var HeaderOrg = _styledComponents["default"].div(_templateObject3(), headerSize, headerSize, headerSize);

exports.HeaderOrg = HeaderOrg;

var NavLink = _styledComponents["default"].a(_templateObject4(), textColor, textColor, textColor, textColor);

exports.NavLink = NavLink;

var MobileMenu = _styledComponents["default"].div(_templateObject5());

exports.MobileMenu = MobileMenu;