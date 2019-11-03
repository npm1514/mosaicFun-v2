"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _main = require("../styled-components/pages/main");

var _global = require("../styled-components/global");

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

var Main =
/*#__PURE__*/
function (_Component) {
  _inherits(Main, _Component);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "placeImage", function () {
      var _this$state = _this.state,
          divisiblesWidth = _this$state.divisiblesWidth,
          divisiblesHeight = _this$state.divisiblesHeight;
      var inputDivision = document.getElementById('inputDivision');

      if (inputDivision && inputDivision.value) {
        _this.setState({
          divisiblesWidth: parseInt(inputDivision.value),
          divisiblesHeight: parseInt(inputDivision.value)
        });
      }

      var colorAccuracy = document.getElementById('colorAccuracy');

      if (colorAccuracy && colorAccuracy.value) {
        _this.setState({
          accuracy: parseInt(colorAccuracy.value)
        });
      }

      var fileImg = document.getElementById('imgFile').files[0];
      var reader = new FileReader();

      var self = _assertThisInitialized(_this);

      reader.onloadend = function () {
        var img = document.getElementById('imgVisual');
        img.onload = self.getCanvasData;
        img.src = reader.result;
      };

      reader.readAsDataURL(fileImg);
    });

    _defineProperty(_assertThisInitialized(_this), "printImage", function () {
      var printCanvas = document.getElementById('printCanvas');
      if (printCanvas) printCanvas.remove();
      var mosaic = document.querySelector("#mosaicOverlay");
      html2canvas(mosaic).then(function (canvas) {
        canvas.id = "printCanvas";
        document.body.appendChild(canvas);
        var printCanvas = document.getElementById('printCanvas');
        var orientation = mosaic.width > mosaic.height ? "l" : "p";
        var doc = new jsPDF("", "px", [printCanvas.width * 4 / 3 + 60, printCanvas.height * 4 / 3 + 60]);
        doc.addImage(printCanvas, 'JPEG', 20, 20, printCanvas.width, printCanvas.height);
        doc.save('mosaic_' + new Date().toISOString() + '.pdf');
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCanvasData", function () {
      var _this$state2 = _this.state,
          colorList = _this$state2.colorList,
          uniqueColorList = _this$state2.uniqueColorList,
          divisiblesWidth = _this$state2.divisiblesWidth,
          divisiblesHeight = _this$state2.divisiblesHeight,
          accuracy = _this$state2.accuracy,
          printWidth = _this$state2.printWidth,
          printHeight = _this$state2.printHeight;
      var img = document.getElementById('imgVisual');
      var sizer = printHeight / img.height <= printWidth / img.width ? printHeight / img.height : printWidth / img.width;
      img.style.height = img.height * sizer;
      var canvas = document.createElement('canvas'); // if(img.width != img.height){
      //   this.setState({ divisiblesHeight: parseInt(img.height*divisiblesWidth/img.width) })
      // }

      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height); // document.getElementById('mosaicOverlay').style.height = img.height + "px";

      document.getElementById('mosaicOverlay').style.width = Math.ceil(img.width * 1.01) + "px";
      var newColorList = [];

      for (var k = 0; k < divisiblesHeight; k++) {
        for (var j = 0; j < divisiblesWidth; j++) {
          var xpos = j * img.width / divisiblesWidth;
          var ypos = k * img.height / divisiblesHeight;
          var xwide = img.width / divisiblesWidth;
          var yhigh = img.height / divisiblesHeight;
          var data = canvas.getContext('2d').getImageData(xpos, ypos, xwide, yhigh).data;
          var multiplier = xwide * yhigh;
          var totalr = 0,
              totalg = 0,
              totalb = 0,
              totala = 0;
          var accuracyNum = Math.floor(accuracy * -2.54 + 255);

          for (var i = 0; i < data.length; i += 4) {
            totalr += data[i];
            totalg += data[i + 1];
            totalb += data[i + 2];
          }

          newColorList.push(Math.ceil(totalr / accuracyNum / multiplier) * accuracyNum + ',' + Math.ceil(totalg / accuracyNum / multiplier) * accuracyNum + ',' + Math.ceil(totalb / accuracyNum / multiplier) * accuracyNum);
        }
      }

      _this.setState({
        colorList: newColorList,
        uniqueColorList: newColorList.filter(function (value, index, self) {
          return self.indexOf(value) === index;
        })
      });

      _this.placeMosaic();
    });

    _defineProperty(_assertThisInitialized(_this), "placeMosaic", function () {
      var _this$state3 = _this.state,
          colorList = _this$state3.colorList,
          uniqueColorList = _this$state3.uniqueColorList,
          divisiblesWidth = _this$state3.divisiblesWidth,
          divisiblesHeight = _this$state3.divisiblesHeight,
          printHeight = _this$state3.printHeight,
          printWidth = _this$state3.printWidth,
          gridLines = _this$state3.gridLines,
          colorText = _this$state3.colorText;
      var img = document.getElementById('imgVisual');
      var sizer = printHeight / img.height <= printWidth / img.width ? printHeight / img.height : printWidth / img.width;
      var mosOL = document.getElementById('mosaicOverlay');
      mosOL.innerHTML = "";

      for (var i = 0; i < divisiblesWidth * divisiblesHeight; i++) {
        var div = document.createElement('div');
        var hideGrid = gridLines ? "" : "hideGrid";
        var hideText = colorText ? "" : "hideText";
        div.className = "mosBlock ".concat(hideGrid, " ").concat(hideText);
        div.ondblclick = _this.doubleClick;
        div.id = "mosBlock" + i;
        div.style.width = img.width * sizer / divisiblesWidth + "px";
        div.style.height = img.height * sizer / divisiblesHeight + "px";
        var colorNum = uniqueColorList.findIndex(function (color) {
          return color == colorList[i];
        }) + 1;
        div.innerText = colorNum;
        div.style.backgroundColor = "rgb(" + colorList[i] + ")";
        mosOL.appendChild(div);
      }

      document.getElementById('imgFile').style.display = "none";
      document.getElementById('imgVisual').style.display = "none";
      document.getElementById('restartBtn').style.display = "inline-block";
      document.getElementById('printBtn').style.display = "inline-block";
    });

    _defineProperty(_assertThisInitialized(_this), "doubleClick", function (e) {
      var dblclickedId = _this.state.dblclickedId;
      e.preventDefault();

      _this.setState({
        dblclickedId: e.target.id
      });

      document.getElementById(dblclickedId).style.opacity = 0.5;
      document.getElementById('mosaicOverlay').addEventListener('click', _this.colorChanger);

      document.onselectstart = function () {
        return false;
      };

      e.target.ondragstart = function () {
        return false;
      };

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "colorChanger", function (e) {
      var dblclickedId = _this.state.dblclickedId;
      document.getElementById(dblclickedId).style.opacity = 1;
      document.getElementById(dblclickedId).style.backgroundColor = e.target.style.backgroundColor;
      document.getElementById(dblclickedId).innerText = e.target.innerText;
      document.getElementById('mosaicOverlay').removeEventListener('click', _this.colorChanger);
    });

    _defineProperty(_assertThisInitialized(_this), "stateChange", function (prop, value) {
      var obj = {};
      obj[prop] = value ? false : true;

      _this.setState(obj, _this.placeMosaic);
    });

    _this.state = {
      colorList: [],
      uniqueColorList: [],
      divisiblesWidth: 20,
      divisiblesHeight: 20,
      printWidth: 1063,
      printHeight: 1375,
      accuracy: 85,
      dblclickedId: "",
      colorText: false,
      gridLines: true,
      premium: true
    };
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          premium = _this$state4.premium,
          colorText = _this$state4.colorText,
          gridLines = _this$state4.gridLines;
      return _react["default"].createElement(_global.MainWrapper, null, _react["default"].createElement(_components.Header, {
        printImage: this.printImage,
        gridLines: gridLines,
        colorText: colorText,
        stateChange: this.stateChange,
        mainTool: true
      }), _react["default"].createElement(_global.MainContent, null, _react["default"].createElement(_main.MosaicOverlay, {
        id: "mosaicOverlay"
      }), _react["default"].createElement(_global.MainForm, {
        id: "imgForm"
      }, premium && _react["default"].createElement(_global.MainInput, {
        id: "inputDivision",
        type: "text",
        placeholder: "Number of Divisions [D-20]"
      }), premium && _react["default"].createElement(_global.MainInput, {
        id: "colorAccuracy",
        type: "text",
        placeholder: "Color Quality 1-100 [D-80]"
      }), _react["default"].createElement(_global.MainInput, {
        id: "imgFile",
        type: "file",
        placeholder: "Select Image File",
        onChange: this.placeImage
      })), _react["default"].createElement(_main.MainImage, {
        id: "imgVisual"
      }), _react["default"].createElement("script", {
        src: "https://html2canvas.hertzen.com/dist/html2canvas.min.js"
      }), _react["default"].createElement("script", {
        src: "https://unpkg.com/jspdf@latest/dist/jspdf.min.js"
      })), _react["default"].createElement(_components.Footer, null));
    }
  }]);

  return Main;
}(_react.Component);

var _default = Main;
exports["default"] = _default;