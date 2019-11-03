"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrintCanvas = exports.MosaicOverlay = exports.MainImage = exports.MainButton = exports.MainInput = exports.MainForm = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin: auto;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    .mosBlock {\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border: 0.25px solid grey;\n      font-size: 75%;\n    }\n    .mosBlock.hideGrid {\n      border: none;\n    }\n    .mosBlock.hideText {\n      color: transparent;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: auto;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 300px;\n    padding: 16px;\n    font-size: 24px;\n    font-family: 'Oswald';\n    text-align: center;\n    border: 1px solid grey;\n    margin: 24px auto;\n    display: block;\n    opacity: 0.5;\n    margin: 10px auto;\n  "]);

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

var MainImage = _styledComponents["default"].img(_templateObject4());

exports.MainImage = MainImage;

var MosaicOverlay = _styledComponents["default"].div(_templateObject5());

exports.MosaicOverlay = MosaicOverlay;

var PrintCanvas = _styledComponents["default"].div(_templateObject6());

exports.PrintCanvas = PrintCanvas;