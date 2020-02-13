import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Resolution.css';

const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));
  


  export default function Resolution(props) {
  
  
  
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'stream' : 'image';
  
    function handleResolutionClick(event) {
      console.log('d' + event.target.name)
      props.onResolutionChange(event.target.name); // pass any argument to the callback
    }

return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Resolution
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        
 <div className="grid">

 <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.20"} />

 <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.30"} />

 <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.40"} />

 <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.50"} />
       
 <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.55"} />

 <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.60"} />
         <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.65"} />
         <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.70"} />
         <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.74"} />
         <img className="cropped" key="10" onClick={handleResolutionClick}  percent="10"  src={"http://" + props.camera + ":5000/"+id+".jpg?height=200&width=200&downsample=0.78"} />
       
   
   </div>
        <Typography className={classes.typography}>Select a Camera</Typography>
      </Popover>
    </div>
  );
}