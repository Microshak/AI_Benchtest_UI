
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
import Pi from './Views/pi/pi';
import FacialRecognition from './Views/facialrecognition';
//import RFPi from './Views/facialrecognition/pi'
import Home from './Views/home';
import Vision from './Views/vision'


import React, { useState } from "react";
import ReactDOM from "react-dom";



import IconButton from "@material-ui/core/IconButton";


import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const drawerWidth = 260;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));


export default function App() {
  const classes = useStyles();
return (
  <Router>
  <div className={classes.root}>
  <CssBaseline />
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" noWrap>
        AI Test Bench
      </Typography>
    </Toolbar>
  </AppBar>
  <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    anchor="left">
    <div className={classes.toolbar} />
    <Divider />
   
    <div className="menuhead"> 
        Computer Vision
        </div>
    <List>
        <ListItem button component={Link} to="/facialrecognition"> 
          <ListItemIcon> <FaceIcon /></ListItemIcon>
          <ListItemText primary="Facial Recognition " />
        </ListItem>

       
        <ListItem button component={Link} to="/Pose"> 
          <ListItemIcon> <FilterVintageIcon /></ListItemIcon>
          <ListItemText primary="Object Detection" />
        </ListItem>
        <ListItem button component={Link} to="/Pose"> 
          <ListItemIcon> <EmojiPeopleIcon /></ListItemIcon>
          <ListItemText primary="Pose Detection" />
        </ListItem>

        <ListItem button component={Link} to="/Pose"> 
          <ListItemIcon> <TagFacesIcon /></ListItemIcon>
          <ListItemText primary="Sentiment Analysis" />
        </ListItem>

        <ListItem button component={Link} to="/Pose"> 
          <ListItemIcon> <PermIdentityIcon /></ListItemIcon>
          <ListItemText primary="Face ID" />
        </ListItem>

        <ListItem button component={Link} to="/Pose"> 
          <ListItemIcon> <EqualizerIcon /></ListItemIcon>
          <ListItemText primary="Demographics" />
        </ListItem>



    </List>
    <Divider />
    <div className="menuhead"> 
        Language Understanding
        </div>
    <List>
      
        <ListItem button component={Link} to="/HAAR"> 
          <ListItemIcon> <RecordVoiceOverIcon /></ListItemIcon>
          <ListItemText primary="LUIS" />
        </ListItem>

       </List>
  </Drawer>
  <main className={classes.content}>
    <div className={classes.toolbar} />



    
           <Switch>
            <Route path="/pi">
            <Pi />
          </Route>
          <Route path="/facialrecognition">
            <FacialRecognition />
          </Route>
          <Route path="/Vision">
            <Vision />
          </Route>
          <Route path="/">
            <Home />
          </Route>

          
        </Switch>
            

    </main>
    </div>
</Router>
)
};



