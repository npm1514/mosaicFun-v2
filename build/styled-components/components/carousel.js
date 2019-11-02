"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselSlide = exports.Carousel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    max-height: 80vh;\n    max-width: 90vw;\n    display: block;\n    position: relative;\n    opacity: 1;\n    margin: auto;\n    transition: opacity 0.8s;\n    h1 {\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      width: max-content;\n      min-width: 200px;\n      padding: 24px;\n      font-size: 20px;\n      background-color: white;\n      opacity: 0.8;\n      text-align: center;\n      position: absolute;\n      height: max-content;\n      color: #303030;\n      border: 3px solid pink;\n      border-radius: 6px;\n      white-space: pre-line;\n      line-height: 1.5;\n    }\n    img {\n      max-width: 90vw;\n      max-height: 80vh;\n      height: auto;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 90vw;\n    margin: 0 5vw;\n    height: 100%;\n    margin: auto;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Carousel = _styledComponents["default"].div(_templateObject());

exports.Carousel = Carousel;

var CarouselSlide = _styledComponents["default"].div(_templateObject2());

exports.CarouselSlide = CarouselSlide;