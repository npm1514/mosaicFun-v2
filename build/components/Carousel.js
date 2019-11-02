"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _carousel = require("../styled-components/components/carousel");

var _utils = _interopRequireDefault(require("./utils"));

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

var CarouselComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselComponent, _Component);

  function CarouselComponent(props) {
    var _this;

    _classCallCheck(this, CarouselComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarouselComponent).call(this, props));
    _this.state = {
      slides: [0, 3]
    };
    return _this;
  }

  _createClass(CarouselComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        var carouselWrap = document.getElementById('carouselWrap');
        console.log(carouselWrap.style.left);
        var slides = _this2.state.slides;
        var fSlide = slides[0];
        var lSlide = slides[1];
        var clength = _utils["default"].length;

        if (lSlide + 1 > clength) {
          fSlide = 0;
          lSlide = 3;
        } else {
          fSlide++;
          lSlide++;
        }

        _this2.setState({
          slides: [fSlide, lSlide]
        });
      }, 5000);
    }
  }, {
    key: "render",
    value: function render() {
      var slides = this.state.slides;

      var showingSlides = _utils["default"].slice(slides[0], slides[1]);

      console.log(showingSlides);
      return _react["default"].createElement(_carousel.Carousel, null, _react["default"].createElement(_carousel.CarouselWrap, {
        id: "carouselWrap"
      }, showingSlides.map(function (a) {
        return _react["default"].createElement(_carousel.CarouselSlide, null, _react["default"].createElement("h1", {
          style: {
            fontSize: a.fontSize,
            color: a.color
          }
        }, a.text), _react["default"].createElement("img", {
          src: a.image
        }));
      })));
    }
  }]);

  return CarouselComponent;
}(_react.Component);

var _default = CarouselComponent;
exports["default"] = _default;