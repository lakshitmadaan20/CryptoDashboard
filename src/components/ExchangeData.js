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


const ExchangeData = ({ data }) => {
    
    const classes = useStyles();

    function convertToInternationalCurrencySystem (labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(labelValue));
    
      }

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
            title={data.name}
            
          />
          {/* <CardMedia
            className={classes.media}
            
          /> */}
          <CardContent>
            <Typography className="black-5 text-white" variant="body1" color="textSecondary" component="p">
             Country: <br></br> {data.country ? data.country : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className="black-6 text-white" variant="body2" color="textSecondary" component="p">
              Established In: {data.year_established? data.year_established : "No Data"}
            </Typography>
            </CardContent>
            <CardContent>
            <Typography className="black-7 text-white" variant="body2" color="textSecondary" component="p">
              Trade Volume: <br></br> ₹ {data.trade_volume_24h_btc?  convertToInternationalCurrencySystem(data.trade_volume_24h_btc) : "Not Available"}
            </Typography>
            </CardContent>
            <CardContent>
            <Typography className="black-8 text-white" variant="body2" color="textSecondary" component="p">
              Normalized Trade Volume: <br></br> ₹ {data.trade_volume_24h_btc_normalized?  convertToInternationalCurrencySystem(data.trade_volume_24h_btc_normalized)  : "Not Available"}
            </Typography>
            </CardContent>
          <CardContent>
            <Typography className="text-center">
                <a  style={{padding: "3px 12px",borderRadius:"10px"}}  href={data.url} className="btn btn-outline-success">View Source</a>
            </Typography>
          </CardContent>
        </Card>
           </Grid>
        </div>
    )
}

export default ExchangeData