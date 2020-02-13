import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './index.css';
import Camera from '../../Components/Camera';
import Algorithm from '../../Components/Algorithm';
import Device from '../../Components/Device';
import Resolution from '../../Components/Resolution';



const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  
}));


let imgStyle = {
  width: '800px',
height:'600px'
};


function RFPi() {
  // Declare a new state variable, which we'll call "count"
  

  const classes = useStyles();
  const [rez, setRez] = React.useState('800 600');
  const [height, setHeight] = React.useState('600');
  const [width, setWidth] = React.useState('800');
  const [imagestyle, setImagestyle] = React.useState(imgStyle);
  
  
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [sample, setSample] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setSample(newValue / 100);
  };

  //React.useEffect(() => {
  //  setLabelWidth(inputLabel.current.offsetWidth);
  //}, []);

  function handleChange(cameraip, deviceip){
    //setRez(event.target.value);
    
    setRez(["800", "600"])
    setHeight(800)
    setWidth(600)
    var c = camera == "none"? cameraip:camera;
    var d = device == "none"? deviceip:device;
    console.log(c)
    console.log(d)

    

     var newStyle = {
      width: '800px',
    height: '600px',
    backgroundImage: "url(http://"+  d +":8000/haar/image.jpg?height="+height + "&width="+width+"&downsample="+ sample + "&camera="+ c + ")"
    
    };
    
    setImagestyle(newStyle)

  };


  const [camera, setCamera] = useState("none")
  const [device, setDevice] = useState("none")
  function handleCameraChange(cameraip) {
    console.log(cameraip)
    setCamera(cameraip)
    handleChange(cameraip,device)
  }

  function handleDeviceChange(deviceip) {
  
    setDevice(deviceip)
    handleChange(camera,deviceip)
  }



  return (
    <div className="main">
      
      
      <div className="configdiv">
        <Camera onCameraChange={handleCameraChange} name={camera}></Camera>
        <Device onDeviceChange={handleDeviceChange} name={device} category="Facial Recognition"></Device>
        <Resolution onCameraChange={handleCameraChange} name={camera}></Resolution>
        <Algorithm onCameraChange={handleCameraChange} name={camera}></Algorithm>
 
        </div>
    
      <div className="wrapper">
      
      
        
       
       

    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Down Sample
      </Typography>
      <Slider
        defaultValue={0}
        //getAriaValueText={sample}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={90}
        onChange={handleSliderChange}
      />
      </div>
      <div>Computed Resolution:{Math.round((1- sample) * width)} X {Math.round((1 -sample) * height)}</div>
      {camera}

      </div>
      <div className="imageHolder">
      <div id="imageDiv" style={imagestyle}></div>
      </div> 
           <img id="bg" style={imagestyle} src={"http://"+  device +":8000/haar/image.jpg?height="+height + "&width="+width+"&downsample="+ sample + "&camera="+ camera}></img>
      
         </div>
  );
}
export default RFPi;