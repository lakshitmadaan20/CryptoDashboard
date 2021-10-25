import React from 'react'
import { Link } from 'react-router-dom'
import './Coin.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {Grid} from '@material-ui/core';

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

const Coin = ({ image, name, symbol, price, volume, priceChange, id, rank }) => {
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
           <Card style={{padding: "3px 12px",borderRadius:"20px"}} className={classes.root}>
           <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                 {symbol}
              </Avatar>
            }
            title={name}
            
          />
          <CardMedia
            className={classes.media}
            image={image}
          />
          <CardContent>
            <Typography className="black-5 text-white"  variant="body1" color="textSecondary" component="p">
             Symbol: {symbol ? symbol.toUpperCase() : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className="black-6 text-white" variant="body2" color="textSecondary" component="p">
              Price: ₹ {price? convertToInternationalCurrencySystem(price) : "Not Available"}
            </Typography>
            </CardContent>
            <CardContent>
            <Typography className="black-7 text-white"  variant="body2" color="textSecondary" component="p">
              Volume: ₹ {volume? convertToInternationalCurrencySystem(volume) : "Not Available"}
            </Typography>
            </CardContent>
            {/* <CardContent>
            <Typography className="black-5 text-white" variant="body2" color="textSecondary" component="p">
              Price Change: 
            </Typography>
            </CardContent> */}
            <CardContent>
            <Typography variant="body2 text-center" color="textSecondary" component="p">
              {priceChange < 0 ? (
                        <p className="coin-percent text-center text-white black-3"> {priceChange.toFixed(2)}%</p>
                    ) : (<p className="coin-percent text-center text-white black-4">+ {priceChange.toFixed(2)}%</p>)}
            </Typography>
            </CardContent>
          <CardContent>
            <Typography className="text-center">
             <Link style={{padding: "3px 12px",borderRadius:"10px"}} className="btn btn-outline-primary" to={`/coindata/${id}`}>View Data</Link>
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        </div>
    )
}

export default Coin