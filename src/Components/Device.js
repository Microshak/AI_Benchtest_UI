import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Device.css';

const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));
  


  export default function Device(props) {
  
  
  
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get('https://ai-benchtest.azurewebsites.net/device')
          .then(res => {

            let ret = []
            console.log(props.category)
            for(var x = 0; x<res.data.length; x++)
          {
            for(var y = 0; y< res.data[x].algorithm.length; y++)
            {
              if(res.data[x].algorithm[y].category == props.category)
              {
                ret.push(res.data[x]);
                break;

              }

            }


          }

          props.onDeviceChange(ret[0].ip_address)




              setData(ret);
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
  
    function handleDeviceClick(event) {
      console.log('d' + event.target.name)
      props.onDeviceChange(event.target.name); // pass any argument to the callback
      setAnchorEl(null);
    }

return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Device
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
       
         <img className="cropped" key={item.host_name} onClick={handleDeviceClick}  name={item.ip_address} title={item.host_name} src={item.name + ".jpg"} />
       
      ))}
   
   </div>
        <Typography className={classes.typography}>Select a Device</Typography>
      </Popover>
    </div>
  );
}