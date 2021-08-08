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

const Coin = ({ image, name, symbol, price, volume, priceChange, id, rank }) => {
    const classes = useStyles();
    return (
        <>
          <Grid>
          <Card className={classes.root}>
           <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                 {rank}
              </Avatar>
            }
            title={name}
            
          />
          <CardMedia
            className={classes.media}
            image={image}
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
             Symbol: {symbol ? symbol.toUpperCase() : "Not Available"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: {price? price : "Not Available"}
            </Typography>
            </CardContent>
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Volume: ₹ {volume? volume.toLocaleString() : "Not Available"}
            </Typography>
            </CardContent>
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Price Change: {priceChange < 0 ? (
                        <p className="coin-percent red"> {priceChange.toFixed(2)}%</p>
                    ) : (<p className="coin-percent green">+ {priceChange.toFixed(2)}%</p>)}
            </Typography>
            </CardContent>
          <CardContent>
            <Typography className="text-center">
             <Link className="btn btn-outline-primary" to={`/coindata/${id}`}>View Data</Link>
            </Typography>
          </CardContent>
        </Card>
          </Grid>
        </>
        // <div className="container">
        //     <div className="coin-row">
        //         <div className="coin">
        //             <img src={image} alt="crypto" />
        //             <h1>{name}</h1>
        //             <p className="coin-symbol">{symbol}</p>
        //         </div>
        //         <div className="coin-data">
        //             <p className="coin-price">Price: ₹{price.toLocaleString()}</p>
        //             <p className="coin-volume">volume: ₹{volume.toLocaleString()}</p>
        //             {priceChange < 0 ? (
        //                 <p className="coin-percent red"> {priceChange.toFixed(2)}%</p>
        //             ) : (<p className="coin-percent green">+ {priceChange.toFixed(2)}%</p>)}
        //             <p className="coin-price">
        //                 <Link className="btn btn-outline-primary" to={`/coindata/${id}`}>View Data</Link>   
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Coin