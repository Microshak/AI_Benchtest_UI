
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
import RFPi from './Views/facialrecognition/pi'
import Home from './Views/home';
import Vision from './Views/vision'

import MicroNavHeader from './Components/microNavHeader'

import React, { useState } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon
} from "@mui-treasury/layout";
import {
  defaultLayoutPreset,
  standardLayoutPreset,
  fixedLayoutPreset,
  contentBasedLayoutPreset,
  cozyLayoutPreset,
  muiTreasuryPreset
} from "@mui-treasury/layout/presets";

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const presets = {
  createDefaultLayout: defaultLayoutPreset,
  createStandardLayout: standardLayoutPreset,
  createFixedLayout: fixedLayoutPreset,
  createContentBasedLayout: contentBasedLayoutPreset,
  createCozyLayout: cozyLayoutPreset,
  createMuiTreasuryLayout: muiTreasuryPreset
};

// add presets.create{}() to config props in Root to change the behavior, looking and layout
// <Root config={presets.createCozyLayout()}> ...
function App() {
  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("createStandardLayout");
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });
  return loading ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant={"h2"}>Changing Preset...</Typography>
    </div>
  ) : (
    <Root config={presets[preset]}>
      {({ headerStyles, sidebarStyles }) => (
        <>
          <CssBaseline />
          <Router>
          <Header>
      <h1 className="head">IoT/AI Bench Kit</h1>
          </Header>
          <Content>
           <Switch>
            <Route path="/pi">
            <Pi />
          </Route>
          <Route path="/facialrecognition/pi">
            <RFPi />
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
            </Content>
            </Router>
          <Footer></Footer>
        </>
      )}
    </Root>
  );
}



export default App;
