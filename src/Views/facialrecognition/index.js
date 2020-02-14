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


  //React.useEffect(() => {
  //  setLabelWidth(inputLabel.current.offsetWidth);
  //}, []);

  function handleChange(cameraip, deviceip){
    //setRez(event.target.value);
    
    setRez(["1000", "1200"])
    setHeight(400)
    setWidth(950)
    var c = camera == "none"? cameraip:camera;
    var d = device == "none"? deviceip:device;
    console.log(c)
    console.log(d)

    

     var newStyle = {
    //  width: '800px',
   // height: '600px',
   // backgroundImage: "url(http://"+  d +":8000/haar/image.jpg?height="+height + "&width="+width+"&downsample="+ sample + "&camera="+ c + ")"
    
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
function handleResolutionChange(percent){
  setRez(percent)
  handleChange(camera,device)
 
}


  return (
    <div className="main">
      
      
      <div className="configdiv">
        <Camera onCameraChange={handleCameraChange} name={camera}></Camera>
        <Device onDeviceChange={handleDeviceChange} name={device} category="Facial Recognition"></Device>
        <Resolution onResolutionChange={handleResolutionChange} camera={camera} device={device}></Resolution>
        <Algorithm onCameraChange={handleCameraChange} name={camera}></Algorithm>
 
      
      
        </div>
    
      
      <div className="wrapper">
      <img id="bg" style={imagestyle} src={"http://"+  device +":8000/haar/image.jpg?height="+height + "&width="+width+"&downsample="+ sample + "&camera="+ camera}></img>
      
      
        
       
       

    <div className={classes.root}>
      
      </div>
      
    
      </div>
      
         </div>
  );
}
export default RFPi;