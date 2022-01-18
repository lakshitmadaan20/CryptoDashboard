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
      maxWidth: '98%',
      width: 345,
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

const NewsData = ({ news,i }) => {
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');

    const classes = useStyles();

    return (
        <>
        <Grid>
          <Card style={{padding: "3px 12px",borderRadius:"10px"}} className={classes.root}>
          <CardHeader
            style={{height: '100px'}}
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                  <img style={{height:"110%", width:"110%"}} src={news.imageurl} alt=""/>
              </Avatar>
            }
            title={news.title}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image={news.imageurl}
            title={news.source}
          />
          {/* <CardContent>
            <Typography className="black-5 text-white" variant="body1" color="textSecondary" component="p">
             Description: {news.body ? news.body : "Not Available"}
            </Typography>
          </CardContent> */}
          <CardContent>
            <Typography className="black-6 text-white" variant="body2" color="textSecondary" component="p">
              Category: <br></br>{news.categories}
            </Typography>
            </CardContent>
          <CardContent>
            <Typography className="text-center">
                <a style={{padding: "3px 12px",borderRadius:"10px"}}  href={news.url} className="btn btn-outline-primary">View News</a>
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        </>
      );
}

export default NewsData
