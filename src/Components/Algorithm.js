import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Algorithm.css';

const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));
  


  export default function Algorithm({camera, onCameraChange}) {
  
  
  
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get('https://ai-benchtest.azurewebsites.net/cam')
          .then(res => {
              setData(res.data);
          })
          .catch(err => {
            
          })
  }, []);
  

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'stream' : 'image';
  
    function handleimgClick(event) {
      console.log('d' + event.target.name)
      onCameraChange(event.target.name); // pass any argument to the callback
    }

return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Algorithm
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
 {data.map((item, index) => (
       
         <img className="cropped" key={item.host_name} onClick={handleimgClick}  name={item.ip_address} title={item.host_name} src={"http://" + item.ip_address + ":5000/"+id+".jpg?height=200&width=200&downsample=0"} />
       
      ))}
   
   </div>
        <Typography className={classes.typography}>Select a Camera</Typography>
      </Popover>
    </div>
  );
}