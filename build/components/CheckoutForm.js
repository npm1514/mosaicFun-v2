"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _global = require("../styled-components/global");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CheckoutForm =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckoutForm, _Component);

  function CheckoutForm() {
    _classCallCheck(this, CheckoutForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckoutForm).apply(this, arguments));
  }

  _createClass(CheckoutForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          email = _this$props.email,
          password1 = _this$props.password1,
          password2 = _this$props.password2,
          firstName = _this$props.firstName,
          lastName = _this$props.lastName,
          creditCardNum = _this$props.creditCardNum,
          expMonth = _this$props.expMonth,
          expYear = _this$props.expYear,
          cvv = _this$props.cvv,
          stateChange = _this$props.stateChange,
          submitPurchaseRequest = _this$props.submitPurchaseRequest,
          displayMessage = _this$props.displayMessage;
      return _react["default"].createElement(_global.LoginBlock, null, _react["default"].createElement("h2", null, "Account Information"), _react["default"].createElement("hr", null), _react["default"].createElement("input", {
        required: true,
        value: email,
        type: "email",
        placeholder: "Email",
        onChange: function onChange(e) {
          stateChange("email", e.target.value);
        }
      }), _react["default"].createElement("input", {
        required: true,
        value: password1,
        type: "password",
        placeholder: "Password",
        onChange: function onChange(e) {
          stateChange("password1", e.target.value);
        }
      }), _react["default"].createElement("input", {
        required: true,
        value: password2,
        type: "password",
        placeholder: "Repeat Password",
        onChange: function onChange(e) {
          stateChange("password2", e.target.value);
        }
      }), _react["default"].createElement("input", {
        required: true,
        value: firstName,
        type: "text",
        placeholder: "First Name",
        name: "firstName",
        onChange: function onChange(e) {
          stateChange("firstName", e.target.value);
        }
      }), _react["default"].createElement("input", {
        required: true,
        value: lastName,
        type: "text",
        name: "lastName",
        placeholder: "Last Name",
        onChange: function onChange(e) {
          stateChange("lastName", e.target.value);
        }
      }), _react["default"].createElement("h2", null, "Credit Card Information"), _react["default"].createElement("hr", null), _react["default"].createElement("input", {
        required: true,
        value: creditCardNum,
        type: "text",
        name: "creditCardNum",
        placeholder: "Credit Card Number",
        onChange: function onChange(e) {
          stateChange("creditCardNum", e.target.value);
        }
      }), _react["default"].createElement("label", null, "Expiration Date"), _react["default"].createElement("select", {
        name: "expMonth",
        required: true,
        value: expMonth,
        onChange: function onChange(e) {
          stateChange("expMonth", e.target.value);
        }
      }, _toConsumableArray(Array(12)).map(function (a, i) {
        var adder = i + 1 > 9 ? "" : "0";
        var monthNum = i + 1;
        var month = adder + monthNum;
        return _react["default"].createElement("option", {
          key: i,
          value: month
        }, month);
      })), "/", _react["default"].createElement("select", {
        name: "expYear",
        required: true,
        value: expYear,
        onChange: function onChange(e) {
          stateChange("expYear", e.target.value);
        }
      }, _toConsumableArray(Array(10)).map(function (a, i) {
        var year = (new Date().getFullYear() + i).toString();
        return _react["default"].createElement("option", {
          key: i,
          value: year
        }, year);
      })), _react["default"].createElement("input", {
        required: true,
        value: cvv,
        type: "text",
        name: "cvv",
        placeholder: "CVV",
        onChange: function onChange(e) {
          stateChange("cvv", e.target.value);
        }
      }), _react["default"].createElement("h3", {
        style: {
          color: "red"
        }
      }, displayMessage), _react["default"].createElement("button", {
        onClick: submitPurchaseRequest
      }, "Review Order"), _react["default"].createElement("a", {
        href: "/login"
      }, "Already Have an Account? Login"));
    }
  }]);

  return CheckoutForm;
}(_react.Component);

var _default = CheckoutForm;
exports["default"] = _default;