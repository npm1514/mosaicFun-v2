"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _checkout = require("../styled-components/pages/checkout");

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

var VerifyOrder =
/*#__PURE__*/
function (_Component) {
  _inherits(VerifyOrder, _Component);

  function VerifyOrder() {
    _classCallCheck(this, VerifyOrder);

    return _possibleConstructorReturn(this, _getPrototypeOf(VerifyOrder).apply(this, arguments));
  }

  _createClass(VerifyOrder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          email = _this$props.email,
          firstName = _this$props.firstName,
          lastName = _this$props.lastName,
          creditCardNum = _this$props.creditCardNum,
          expMonth = _this$props.expMonth,
          expYear = _this$props.expYear,
          cvv = _this$props.cvv,
          submitOrder = _this$props.submitOrder;
      return _react["default"].createElement(_checkout.OrderList, null, _react["default"].createElement("h1", null, "Review Order"), _react["default"].createElement("hr", null), _react["default"].createElement("h2", null, "Email: ", email), _react["default"].createElement("h2", null, "Name: ", firstName, " ", lastName), _react["default"].createElement("h2", null, "Credit Card Number: ************", creditCardNum.slice(12)), _react["default"].createElement("h2", null, "Expiration Date: ", expMonth, " / ", expYear), _react["default"].createElement("h2", null, "CVV: ", cvv), _react["default"].createElement("h2", null, "Price: ", _react["default"].createElement("strong", null, "$19.99")), _react["default"].createElement("h2", null, "Subscription Length: ", _react["default"].createElement("strong", null, "1 year")), _react["default"].createElement("button", {
        onClick: submitOrder
      }, "Submit Order"));
    }
  }]);

  return VerifyOrder;
}(_react.Component);

var _default = VerifyOrder;
exports["default"] = _default;