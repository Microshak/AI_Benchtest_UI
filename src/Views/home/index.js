import React from 'react';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import Typography from "@material-ui/core/Typography";
import './index.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import CodeIcon from '@material-ui/icons/Code';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Home() {
  
  return (
    <div className="maindiv">

<div>
<Link to="/Vision" className="speech roundbox" >
            <VisibilityIcon style={{ fontSize: 82 }}  />
            <Typography variant={"h5"}>Vision</Typography>
            </Link>

<Link to="/Speech" className="speech roundbox">
            <RecordVoiceOverIcon style={{ fontSize: 82 }}  />
            <Typography variant={"h5"}>Speech</Typography>
            </Link>

            </div>
            <div>
            <Link to="/Mixed" className="speech roundbox" >
            <RecordVoiceOverIcon style={{ fontSize: 82 }}  />
            
            <VisibilityIcon style={{ fontSize:82 }}  />
            <Typography variant={"h5"}>Mixed</Typography>
            </Link>

            <Link to="/Code" className="speech roundbox" >
            <CodeIcon style={{ fontSize: 82 }}  />
            <Typography variant={"h5"}>Code Examples</Typography>
            </Link>
            </div>
    </div>
  );
}
export default Home;