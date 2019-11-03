"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginBlock = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  padding: 16px;\n  height: max-content;\n  margin: auto;\n  border: 1px solid #303030;\n  border-radius: 4px;\n  text-align: center;\n  input, button {\n    display: block;\n    padding: 12px;\n    font-size: 18px;\n    width: 300px;\n    margin: 12px auto;\n  }\n  a {\n    color: #8a2be2;\n  }\n  @media (min-width: 432px){\n    width: 400px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginBlock = _styledComponents["default"].div(_templateObject());

exports.LoginBlock = LoginBlock;