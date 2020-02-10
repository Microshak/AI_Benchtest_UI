import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));
  


  export default function Camera() {
  
  
  
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const [data, setData] = useState({ hits: [] });
    useEffect(async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
      setData(result.data);
    },[]);
  

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  


return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Camera
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
 <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>

        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}