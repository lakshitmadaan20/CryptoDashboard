import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Coin';
import {Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'

const HomeShort = () => {

    const [coinData, setCoinData] = useState([]);
    const [loading, setLoading] = useState(false)
    // const [search, setSearch] = useState('')

    const getData = async() => {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=8&page=1&sparkline=true"
        setLoading(true)
        await axios.get(url)
        .then(res => {
        console.log(res.data)
        setCoinData(res.data)
        setLoading(false)
        })
        .catch(error => alert(error, 'Failed to load the data!!'))
    }

    useEffect(() => {
       setInterval(getData() ,3000)
    }, [])

    const isLoading = () => {
            return (
                <div class="spinner">
                    <div class="d-flex justify-content-center">
                      <div class="spinner-border" role="status">
                      </div>
                    </div> 
                </div>        
            )
    }

   return (
    <div className="container">
    <br/>
    {loading ? isLoading() : 
    <>
    <h2 className="text-center text-white">Latest Cryptos</h2>
    <Link to='/crypto' className="nav-link">
    <p className="text-center">View All</p>
    </Link>
      <Grid container spacing={2} style={{gap:'20px', justifyContent: 'center'}}>
        {coinData.map((coin, i) => {
            return <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
            rank={coin.market_cap_rank}
        />
        })} 
    </Grid>
    </>
    }
</div>
   )
}

export default HomeShort;