"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _global = require("../styled-components/global");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Checkout =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkout, _Component);

  function Checkout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      email: "",
      password1: "",
      password2: "",
      firstName: "",
      lastName: "",
      creditCardNum: "",
      expMonth: "01",
      expYear: new Date().getFullYear().toString(),
      cvv: "",
      review: false,
      displayMessage: ""
    });

    _defineProperty(_assertThisInitialized(_this), "submitPurchaseRequest", function () {
      var _this$state = _this.state,
          password1 = _this$state.password1,
          password2 = _this$state.password2,
          creditCardNum = _this$state.creditCardNum,
          cvv = _this$state.cvv;
      var good = true;
      var message = "";

      if (password1 != password2) {
        good = false;
        message += "Passwords do not match!\n";
      }

      if (creditCardNum.length != 16) {
        good = false;
        message += "Invalid Credit Card Number!\n";
      }

      if (cvv.length != 3) {
        good = false;
        message += "Invalid CVV Number!\n";
      }

      if (message) {
        _this.setState({
          displayMessage: message
        });
      }

      if (good) {
        console.log("Purchase request", _this.state);

        _this.setState({
          review: true
        });

        window.scrollTo(0, 0);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "submitOrder", function () {
      console.log("submit order", _this.state);
    });

    _defineProperty(_assertThisInitialized(_this), "stateChange", function (prop, val) {
      var _this$setState;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, prop, val), _defineProperty(_this$setState, "displayMessage", ""), _this$setState));
    });

    return _this;
  }

  _createClass(Checkout, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_global.MainWrapper, null, _react["default"].createElement(_components.Header, null), _react["default"].createElement(_global.MainContent, null, !this.state.review ? _react["default"].createElement(_components.CheckoutForm, _extends({}, this.state, {
        stateChange: this.stateChange,
        submitPurchaseRequest: this.submitPurchaseRequest
      })) : _react["default"].createElement(_components.VerifyOrder, _extends({}, this.state, {
        submitOrder: this.submitOrder
      }))), _react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Checkout;
}(_react.Component);

var _default = Checkout;
exports["default"] = _default;