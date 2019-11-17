import React, { Component, Fragment } from 'react';
import { Header, Footer, LoadingBlock } from '../components';
import { MainImage, MosaicOverlay, PrintCanvas } from '../styled-components/pages/main';
import { MainForm, MainInput, MainContent, MainWrapper, SubHeader } from '../styled-components/global';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

class Main extends Component {
    constructor(props){
      super(props);
      this.state = {
        loading: false,
        printed: false,
        pageloaded: false,
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
      this.setState({
        loading: true
      })
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
          "", "px",
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
      this.setState({
        printed: true,
        loading: false
      })
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


      if(prop == 'divisibles'){
        obj.divisiblesWidth = parseInt(value);
        obj.divisiblesHeight = parseInt(value);
      } else if(prop == 'accuracy'){
        obj.accuracy = parseInt(value);
      } else {
        obj[prop] = value ? false : true;
      }
      console.log(obj);
      if(this.state.printed && prop != 'divisibles' && prop != 'accuracy'){
        obj.loading = true;
        this.setState(obj, this.placeMosaic)
      } else {
        this.setState(obj)
      }
    }

    componentDidMount(){
      this.setState({
        pageloaded: true
      })
    }
    render(){
      const {
        premium, colorText, gridLines, loading, printed, pageloaded, divisiblesWidth, accuracy
      } = this.state;
      console.log(this.state.divisiblesWidth);
      return (
        <MainWrapper>
          <Header mainTool={true} />
          <MainContent>
            <SubHeader>
              {
                printed && <Fragment>
                  <Button
                    id="restartBtn"
                    variant="outlined"
                    color="primary"
                    onClick={() => {window.location.reload()}}
                  >Restart</Button>
                  <Button
                    id="printBtn"
                    variant="outlined"
                    color="primary"
                    onClick={this.printImage}
                  >Print</Button>
                  <br/>
                </Fragment>
              }
              {
                pageloaded && <Fragment>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gridLines}
                      onChange={() => {this.stateChange('gridLines', gridLines)}}
                      value={gridLines}
                    />
                  }
                  label="Grid Lines"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={colorText}
                      onClick={() => {this.stateChange('colorText', colorText)}}
                      value={colorText}
                    />
                  }
                  label="Color Numbers"
                />
                </Fragment>
              }

            </SubHeader>
            {loading && <LoadingBlock/>}
            <MosaicOverlay id="mosaicOverlay"></MosaicOverlay>
            <MainForm id="imgForm" onSubmit={this.placeImage}>
              {
                pageloaded && premium && <Fragment>
                  <TextField
                    id="inputDivision"
                    label="Number of Divisions - Max 50"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    value={divisiblesWidth}
                    onChange={(e) => {this.stateChange('divisibles', e.target.value)}}
                     onSubmit={this.placeImage}
                  />
                  <br/>
                  <TextField
                    id="colorAccuracy"
                    label="Color Quality 1-100"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    value={accuracy}
                    onChange={(e) => {this.stateChange('accuracy', e.target.value)}}
                     onSubmit={this.placeImage}
                  />
                </Fragment>
              }
              {
                !printed && <MainInput
                  id="imgFile"
                  type="file"
                  placeholder="Select Image File"
                  onChange={this.placeImage}
                />
              }
            </MainForm>
            { !printed && <MainImage id="imgVisual"/> }

          </MainContent>
          <Footer/>
        </MainWrapper>
      );
    }
}

export default Main;
