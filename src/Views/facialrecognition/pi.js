import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './pi.css';
import Camera from '../../Components/Camera';

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

  const handleChange = event => {
    //setRez(event.target.value);
    var res = event.target.value.split(" ")
    setRez(event.target.value)
    setHeight(res[1])
    setWidth(res[0])
    console.log(res[0])
     var newStyle = {
      width: res[0]+'px',
    height:res[1]+ 'px'
    };
    
    setImagestyle(newStyle)

  };
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div class="main">
      <div class="wrapper">
      <FormControl className={classes.formControl}>
        <Camera></Camera>
        <InputLabel id="demo-simple-select-label">Resolution</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rez}
          onChange={handleChange}
          defaultValue={"800 600"}
        >
          <MenuItem value="640 480" >640 X 480</MenuItem>

          <MenuItem value="800 600">800 X 600</MenuItem>
          <MenuItem value="1280 720">1280 X 720</MenuItem>
        </Select>
      </FormControl>


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
      
      </div> 
           <img id="bg" style={imagestyle} src={"http://localhost:5001/image.jpg?height="+height + "&width="+width+"&downsample="+ sample}></img>
      
         </div>
  );
}
export default RFPi;