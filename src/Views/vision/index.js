import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));


function Vision() {
    const classes = useStyles();

    return (

<>
  
     <Container className={classes.cardGrid} maxWidth="md">

   <Grid container spacing={4}>
          
          
          
            <Grid item key="haar" xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://4.bp.blogspot.com/-C7Ei3NqLID0/WVd2DQglwmI/AAAAAAAAFQ4/uxeE1VduPKwQ_HfS3o4eQi-LLBz3tBzeQCLcBGAs/s1600/haar_cascade.png"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Facial Recognition
                  </Typography>
                  <Typography>
                    Detect Faces 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href="/facialrecognition/pi">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Info
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          
          

            <Grid item key="NN" xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://acadgild.com/blog/wp-content/uploads/2018/03/Concurrent-Neural-Network-1.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Pose Detection
                  </Typography>
                  <Typography>
                    Detect Poses
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          



          </Grid>
      </Container>
      
      </>
  )}

export default Vision;