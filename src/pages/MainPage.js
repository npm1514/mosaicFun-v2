import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { MainWrapper, MainImage, MosaicOverlay, PrintCanvas } from '../styled-components/pages/main';
import { MainForm, MainInput, MainContent } from '../styled-components/global';

class Main extends Component {
    constructor(props){
      super(props);
      this.state = {
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
      }
    }
    placeImage = () => {
      const {
        divisiblesWidth,
        divisiblesHeight
      } = this.state;

      var inputDivision = document.getElementById('inputDivision');
      if(inputDivision && inputDivision.value){
        this.setState({
          divisiblesWidth: parseInt(inputDivision.value),
          divisiblesHeight: parseInt(inputDivision.value)
        })
      }
      var colorAccuracy = document.getElementById('colorAccuracy');
      if(colorAccuracy && colorAccuracy.value){
        this.setState({accuracy: parseInt(colorAccuracy.value)});
      }
      var fileImg = document.getElementById('imgFile').files[0];
      var reader  = new FileReader();
      var self = this;
      reader.onloadend = () => {
        var img = document.getElementById('imgVisual');
        img.onload = self.getCanvasData;
        img.src = reader.result;
      }
      reader.readAsDataURL(fileImg);
    }
    printImage = () => {
      var printCanvas = document.getElementById('printCanvas');
      if(printCanvas) printCanvas.remove();
      var mosaic = document.querySelector("#mosaicOverlay");
      html2canvas(mosaic).then(canvas => {
        canvas.id = "printCanvas";
        document.body.appendChild(canvas)
        var printCanvas = document.getElementById('printCanvas');
        var orientation = mosaic.width > mosaic.height ? "l" : "p"
        var doc = new jsPDF(
          "",
          "px",
          [(printCanvas.width)*4/3 + 60, (printCanvas.height)*4/3 + 60]
        );
        doc.addImage(printCanvas, 'JPEG', 20, 20, printCanvas.width, printCanvas.height);
        doc.save('mosaic_'+new Date().toISOString()+'.pdf');
      });
    }

    getCanvasData = () => {
      const {
        colorList,
        uniqueColorList,
        divisiblesWidth,
        divisiblesHeight,
        accuracy,
        printWidth,
        printHeight
      } = this.state;
      var img = document.getElementById('imgVisual');
      var sizer = printHeight/img.height <= printWidth/img.width ? printHeight/img.height : printWidth/img.width;
      img.style.height = img.height * sizer;
      var canvas = document.createElement('canvas');
      // if(img.width != img.height){
      //   this.setState({ divisiblesHeight: parseInt(img.height*divisiblesWidth/img.width) })
      // }
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
      // document.getElementById('mosaicOverlay').style.height = img.height + "px";
      document.getElementById('mosaicOverlay').style.width = Math.ceil(img.width * 1.01) + "px";
      let newColorList = [];
      for (var k = 0; k < divisiblesHeight; k++) {
        for (var j = 0; j < divisiblesWidth; j++){
          var xpos = j*img.width/divisiblesWidth;
          var ypos = k*img.height/divisiblesHeight;
          var xwide = img.width/divisiblesWidth;
          var yhigh = img.height/divisiblesHeight;
          var data = canvas.getContext('2d').getImageData(xpos, ypos, xwide, yhigh).data;
          var multiplier = xwide * yhigh;
          var totalr = 0, totalg = 0, totalb = 0, totala = 0;
          var accuracyNum = Math.floor(accuracy*-2.54 + 255)
          for(var i = 0; i < data.length; i += 4){
            totalr += data[i];
            totalg += data[i+1];
            totalb += data[i+2];
          }
          newColorList.push(
              Math.ceil(totalr/accuracyNum/multiplier)*accuracyNum
            + ','
            + Math.ceil(totalg/accuracyNum/multiplier)*accuracyNum
            + ','
            + Math.ceil(totalb/accuracyNum/multiplier)*accuracyNum
          );
        }
      }
      this.setState({
        colorList: newColorList,
        uniqueColorList: newColorList.filter((value, index, self) => self.indexOf(value) === index)
      });
      this.placeMosaic();
    }

    placeMosaic = () => {
      const {
        colorList, uniqueColorList,
        divisiblesWidth, divisiblesHeight,
        printHeight, printWidth,
        gridLines, colorText
      } = this.state;
      var img = document.getElementById('imgVisual');
      var sizer = printHeight/img.height <= printWidth/img.width ? printHeight/img.height : printWidth/img.width;
      var mosOL = document.getElementById('mosaicOverlay');
      mosOL.innerHTML = "";
      for (var i = 0; i < (divisiblesWidth*divisiblesHeight); i++) {
        var div = document.createElement('div');
        var hideGrid = gridLines ? "" : "hideGrid";
        var hideText = colorText ? "" : "hideText";
        div.className = `mosBlock ${hideGrid} ${hideText}`;
        div.ondblclick = this.doubleClick;
        div.id = "mosBlock" + i;
        div.style.width = (img.width*sizer/divisiblesWidth) + "px";
        div.style.height = (img.height*sizer/divisiblesHeight) + "px";
        var colorNum = uniqueColorList.findIndex(color => color ==  colorList[i]) + 1;
        div.innerText = colorNum;
        div.style.backgroundColor = "rgb("+colorList[i]+")";
        mosOL.appendChild(div);
      }
      document.getElementById('imgFile').style.display = "none";
      document.getElementById('imgVisual').style.display = "none";
      document.getElementById('restartBtn').style.display = "inline-block";
      document.getElementById('printBtn').style.display = "inline-block";
    }

    doubleClick = (e) => {
      const { dblclickedId } = this.state;
      e.preventDefault();
      this.setState({
        dblclickedId: e.target.id
      });
      document.getElementById(dblclickedId).style.opacity = 0.5;
      document.getElementById('mosaicOverlay').addEventListener('click', this.colorChanger)
      document.onselectstart = function() { return false; };
      e.target.ondragstart = function() { return false; };
      return false;
    }

    colorChanger = (e) => {
      const { dblclickedId } = this.state;
      document.getElementById(dblclickedId).style.opacity = 1;
      document.getElementById(dblclickedId).style.backgroundColor = e.target.style.backgroundColor;
      document.getElementById(dblclickedId).innerText = e.target.innerText;
      document.getElementById('mosaicOverlay').removeEventListener('click', this.colorChanger);
    }
    stateChange = (prop, value) => {
      var obj = {};
      obj[prop] = value ? false : true;
      this.setState(obj, this.placeMosaic)
    }
    render(){
      const { premium, colorText, gridLines } = this.state;
      return (
        <MainWrapper>
          <Header
            printImage={this.printImage}
            gridLines={gridLines}
            colorText={colorText}
            stateChange={this.stateChange}
            mainTool={true}
          />
          <MainContent>
            <MosaicOverlay id="mosaicOverlay"></MosaicOverlay>
            <MainForm id="imgForm">
              {premium && <MainInput
                id="inputDivision"
                type="text"
                placeholder="Number of Divisions [D-20]"
              />}
              {premium && <MainInput
                id="colorAccuracy"
                type="text"
                placeholder="Color Quality 1-100 [D-80]"
              />}
              <MainInput
                id="imgFile"
                type="file"
                placeholder="Select Image File"
                onChange={this.placeImage}
              />
            </MainForm>
            <MainImage id="imgVisual"/>
            <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
            <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
          </MainContent>
          <Footer/>
        </MainWrapper>
      );
    }
}

export default Main;
