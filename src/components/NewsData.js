import React from 'react'
import moment from 'moment';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


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

const NewsData = ({ news }) => {
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');

    const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                 
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
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
             Description: {news.body ? news.body.substring(0, 200): "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Category: {news.categories}
            </Typography>
            </CardContent>
          <CardContent>
            <Typography className="text-center">
                <a href={news.url} className="btn btn-primary">View News</a>
            </Typography>
          </CardContent>
        </Card>
      );
}

export default NewsData
