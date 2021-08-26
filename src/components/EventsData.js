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

const EventsData = ({ events,i }) => {
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');

    const classes = useStyles();

    return (
        <>
        <Grid>
          <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                 {i}
              </Avatar>
            }
            title={events.title}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image={events.screenshot}
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
             Description: {events.description ? events.description.substring(0,300) : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Organiser: {events.organizer ? events.organizer : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Start Date: {events.start_date ? events.start_date : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              End Date: {events.end_date ? events.end_date : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              City: {events.city ? events.city : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Country: {events.country ? events.country : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Venue: {events.venue ? events.venue : "To Be Determined"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className="text-center">
                <a href={events.website} className="btn btn-primary">View Source</a>
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        </>
      );
}

export default EventsData
