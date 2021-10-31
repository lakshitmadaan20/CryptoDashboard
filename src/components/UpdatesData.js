import React from 'react'
import moment from 'moment';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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

const UpdatesData = ({description, projectName, image, category, thumb, createdAt}) => {
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');

    const classes = useStyles();

    return (
        <Grid>
          <Card style={{padding: "3px 12px",borderRadius:"10px"}} className={classes.root}>
          <CardMedia
            className={classes.media}
            image={image}
          />
          <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                <img style={{height:"100%", width:"100%"}} src={thumb}  alt=""/>
              </Avatar>
            }
            title={description.substring(0,100)}
            subheader={date}
          />
          <CardContent>
            <Typography className="black-6  text-white" variant="body2" color="textSecondary" component="p">
              Category: <br></br> {category ? category : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className="black-7  text-white"  variant="body2" color="textSecondary" component="p">
              Project Name: <br></br> {projectName ? projectName : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className="black-8  text-white" variant="body2" color="textSecondary" component="p">
              Creation Date: {createdAt? moment().format(createdAt) : "Not Available"}
            </Typography>
          </CardContent>
        </Card>
        </Grid>
      );
}

export default UpdatesData
