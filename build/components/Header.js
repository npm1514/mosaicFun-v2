"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _header = require("../styled-components/components/header");

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _MobileHeader = _interopRequireDefault(require("./MobileHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderComponent, _Component);

  function HeaderComponent(props) {
    var _this;

    _classCallCheck(this, HeaderComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "openMenu", function () {
      var val = _this.state.menuOpen ? false : true;

      _this.setState({
        menuOpen: val
      });

      if (val) document.body.addEventListener('click', _this.closeMenu);
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function (e) {
      if (e.target.id != "MenuIcon") {
        _this.setState({
          menuOpen: false
        });

        document.body.removeEventListener('click', _this.closeMenu);
      }
    });

    _this.state = {
      menuOpen: false,
      loggedIn: false
    };
    return _this;
  }

  _createClass(HeaderComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          gridLines = _this$props.gridLines,
          stateChange = _this$props.stateChange,
          colorText = _this$props.colorText,
          mainTool = _this$props.mainTool;
      var _this$state = this.state,
          menuOpen = _this$state.menuOpen,
          loggedIn = _this$state.loggedIn;
      return _react["default"].createElement(_header.Header, null, _react["default"].createElement(_header.NavLink, {
        href: "/"
      }, _react["default"].createElement(_header.LogoImg, {
        src: "/images/logoNoSlogan.png"
      })), _react["default"].createElement(_header.HeaderOrg, null, _react["default"].createElement("span", null, _react["default"].createElement(_header.NavLink, {
        href: "/newaccount"
      }, _react["default"].createElement(_Button["default"], {
        variant: "outlined",
        color: "primary"
      }, "Features")), _react["default"].createElement(_header.NavLink, {
        href: "/checkout"
      }, _react["default"].createElement(_Button["default"], {
        variant: "outlined",
        color: "primary"
      }, "Get Premium"))), _react["default"].createElement("span", null, !mainTool && _react["default"].createElement(_header.NavLink, {
        href: "/main"
      }, _react["default"].createElement(_Button["default"], {
        variant: "outlined",
        color: "secondary"
      }, "Try It Out")), loggedIn ? _react["default"].createElement(_Button["default"], {
        variant: "outlined",
        color: "primary"
      }, "Log Out") : _react["default"].createElement(_header.NavLink, {
        href: "/login"
      }, _react["default"].createElement(_Button["default"], {
        variant: "outlined",
        color: "primary"
      }, "Log In")))), _react["default"].createElement(_Menu["default"], {
        onClick: this.openMenu,
        id: "MenuIcon",
        fontSize: "large"
      }), menuOpen && _react["default"].createElement(_MobileHeader["default"], {
        mainTool: mainTool
      }));
    }
  }]);

  return HeaderComponent;
}(_react.Component);

var _default = HeaderComponent;
exports["default"] = _default;