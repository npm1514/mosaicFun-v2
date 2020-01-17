"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _components = require("../components");

var _global = require("../styled-components/global");

var _header = require("../styled-components/components/header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Newaccount =
/*#__PURE__*/
function (_Component) {
  _inherits(Newaccount, _Component);

  function Newaccount() {
    _classCallCheck(this, Newaccount);

    return _possibleConstructorReturn(this, _getPrototypeOf(Newaccount).apply(this, arguments));
  }

  _createClass(Newaccount, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_global.MainWrapper, null, _react["default"].createElement(_components.Header, null), _react["default"].createElement(_global.MainContent, null, _react["default"].createElement(_global.SplitContent, null, _react["default"].createElement("div", null, _react["default"].createElement("h3", null, "Features"), _react["default"].createElement(_global.Unordered, null, _react["default"].createElement(_global.ListItem, null, "Save and Print"), _react["default"].createElement(_global.ListItem, null, "Add/Remove Grid Lines"), _react["default"].createElement(_global.ListItem, null, "Add/Remove Paint By Number"), _react["default"].createElement(_global.ListItem, null, "Change Block Colors"), _react["default"].createElement(_global.ListItem, null, "Control Color Quality"), _react["default"].createElement(_global.ListItem, null, "Control Division Count"))), _react["default"].createElement("div", null, _react["default"].createElement("h3", null, "Subscribe to Premium for $19.99 Anually"), _react["default"].createElement(_header.NavLink, {
        href: "/checkout"
      }, _react["default"].createElement(_Button["default"], {
        variant: "outlined",
        color: "primary"
      }, "Purchase Now"))))), _react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Newaccount;
}(_react.Component);

var _default = Newaccount;
exports["default"] = _default;