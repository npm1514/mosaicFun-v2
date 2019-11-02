"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselSlide = exports.CarouselWrap = exports.Carousel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 90vw;\n    display: block;\n    position: relative;\n    h1 {\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      text-align: center;\n      position: absolute;\n      height: max-content;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: max-content;\n    height: max-content;\n    position: absolute;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    left: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 90vw;\n    margin: 0 5vw;\n    height: 100%;\n    position: relative;\n    overflow: visible;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Carousel = _styledComponents["default"].div(_templateObject());

exports.Carousel = Carousel;

var CarouselWrap = _styledComponents["default"].div(_templateObject2());

exports.CarouselWrap = CarouselWrap;

var CarouselSlide = _styledComponents["default"].div(_templateObject3());

exports.CarouselSlide = CarouselSlide;