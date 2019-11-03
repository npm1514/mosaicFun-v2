"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainContent = exports.MainWrapper = exports.MainButton = exports.MainInput = exports.MainForm = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 16px 0;\n    min-height: calc(100vh - 93px - 103px - 32px);\n    text-align: center;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    min-height: 100vh;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 300px;\n    padding: 16px;\n    font-size: 24px;\n    font-family: 'Oswald';\n    text-align: center;\n    border: 1px solid grey;\n    margin: 24px auto;\n    display: none;\n    opacity: 0.5;\n    margin: 10px auto;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 300px;\n    padding: 16px;\n    font-size: 24px;\n    font-family: 'Oswald';\n    text-align: center;\n    border: 1px solid grey;\n    margin: 24px auto;\n    display: block;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n    margin-bottom: 20px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainForm = _styledComponents["default"].form(_templateObject());

exports.MainForm = MainForm;

var MainInput = _styledComponents["default"].input(_templateObject2());

exports.MainInput = MainInput;

var MainButton = _styledComponents["default"].button(_templateObject3());

exports.MainButton = MainButton;

var MainWrapper = _styledComponents["default"].div(_templateObject4());

exports.MainWrapper = MainWrapper;

var MainContent = _styledComponents["default"].div(_templateObject5());

exports.MainContent = MainContent;