import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.5%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


const ResourcesCard = ({ data }) => {
    
    const classes = useStyles();

    return (
        <div style={{width: '260px'}}>
           <Grid>
           <Card className={classes.root} style={{padding: "3px 12px",borderRadius:"20px"}}>
           <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                  <img style={{height:"110%", width:"110%"}} src={data.image} alt=""/>
              </Avatar>
            }
            title={data.description}
            
          />
          <CardContent>
            <Typography className="black-5 text-white" variant="body1" color="textSecondary" component="p">
             Description: <br></br>{data.name}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className="text-center">
                <a  style={{padding: "3px 12px",borderRadius:"10px"}}  href={data.url} className="btn btn-outline-primary">View Source</a>
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        </div>
    )
}

export default ResourcesCard