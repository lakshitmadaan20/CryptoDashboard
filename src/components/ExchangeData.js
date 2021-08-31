import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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


const ExchangeData = ({ data }) => {
    
    const classes = useStyles();

    return (
        <>
           <Grid style={{padding: "3px 12px",borderRadius:"10px"}}>
           <Card className={classes.root}>
           <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                 {data.trust_score_rank}
              </Avatar>
            }
            title={data.name}
            
          />
          <CardMedia
            className={classes.media}
            image={data.image}
          />
          <CardContent>
            <Typography className="black-5 text-white" variant="body1" color="textSecondary" component="p">
             Country: {data.country ? data.country : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className="black-6 text-white" variant="body2" color="textSecondary" component="p">
              Established In: {data.year_established? data.year_established : "Not Available"}
            </Typography>
            </CardContent>
            <CardContent>
            <Typography className="black-7 text-white" variant="body2" color="textSecondary" component="p">
              Trade Volume: ₹ {data.trade_volume_24h_btc? data.trade_volume_24h_btc.toLocaleString() : "Not Available"}
            </Typography>
            </CardContent>
            <CardContent>
            <Typography className="black-8 text-white" variant="body2" color="textSecondary" component="p">
              Normalized Trade Volume: ₹ {data.trade_volume_24h_btc_normalized? data.trade_volume_24h_btc_normalized.toLocaleString() : "Not Available"}
            </Typography>
            </CardContent>
          <CardContent>
            <Typography className="text-center">
                <a  style={{padding: "3px 12px",borderRadius:"10px"}}  href={data.url} className="btn btn-outline-success">View Source</a>
            </Typography>
          </CardContent>
        </Card>
           </Grid>
        </>
    )
}

export default ExchangeData
