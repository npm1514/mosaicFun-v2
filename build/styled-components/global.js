"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSquare = exports.LoadingDiv = exports.SplitContent = exports.SubHeader = exports.MainContent = exports.MainWrapper = exports.MainButton = exports.MainInput = exports.MainForm = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    border: 1ps solid #8d8d8d;\n    position: absolute;\n    height: 0;\n    width: 0;\n    border-radius: 4px;\n    background-color: ", ";\n    animation: ", " 4s linear infinite;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: 80px;\n    height: 80px;\n    position: relative;\n    margin: auto;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    div {\n      width: 50%;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: auto;\n    padding: 16px 0;\n    text-align: center;\n    button {\n      margin: 8px;\n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 16px 0;\n    min-height: calc(100vh - 93px - 103px - 32px - 100px);\n    text-align: center;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    min-height: 100vh;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 300px;\n    padding: 16px;\n    font-size: 24px;\n    font-family: 'Oswald';\n    text-align: center;\n    border: 1px solid grey;\n    margin: 24px auto;\n    display: block;\n    opacity: 0.5;\n    margin: 10px auto;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 300px;\n    padding: 16px;\n    font-size: 24px;\n    font-family: 'Oswald';\n    text-align: center;\n    border: 1px solid grey;\n    margin: 24px auto;\n    display: block;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n    margin-bottom: 20px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    height: ", "px;\n    width: ", "px;\n    top: ", "%;\n    left: ", "%;\n  }\n\n  50% {\n    height: ", "px;\n    width: ", "px;\n    top: ", "%;\n    left: ", "%;\n  }\n\n  100% {\n    height: ", "px;\n    width: ", "px;\n    top: ", "%;\n    left: ", "%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shrink = function shrink(props) {
  var val = Math.random();
  return (0, _styledComponents.keyframes)(_templateObject(), val * 5 + 35, val * 5 + 35, props.top, props.left, val * 25 + 5, val * 25 + 5, props.top + (45 - val * 25) / 2, props.left + (45 - val * 25) / 2, val * 5 + 35, val * 5 + 35, props.top, props.left);
};

var MainForm = _styledComponents["default"].form(_templateObject2());

exports.MainForm = MainForm;

var MainInput = _styledComponents["default"].input(_templateObject3());

exports.MainInput = MainInput;

var MainButton = _styledComponents["default"].button(_templateObject4());

exports.MainButton = MainButton;

var MainWrapper = _styledComponents["default"].div(_templateObject5());

exports.MainWrapper = MainWrapper;

var MainContent = _styledComponents["default"].div(_templateObject6());

exports.MainContent = MainContent;

var SubHeader = _styledComponents["default"].div(_templateObject7());

exports.SubHeader = SubHeader;

var SplitContent = _styledComponents["default"].div(_templateObject8());

exports.SplitContent = SplitContent;

var LoadingDiv = _styledComponents["default"].div(_templateObject9());

exports.LoadingDiv = LoadingDiv;

var LoadingSquare = _styledComponents["default"].div(_templateObject10(), function (props) {
  return props.color;
}, function (props) {
  return shrink(props);
});

exports.LoadingSquare = LoadingSquare;