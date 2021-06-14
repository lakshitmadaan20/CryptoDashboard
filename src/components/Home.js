import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Coin';


const Home = () => {

    const [coinData, setCoinData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const getData = async() => {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true"
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

    const handleChange = e => {
       setSearch(e.target.value)
    }

    const filteredCoins = coinData.filter(coin =>
       coin.name.toLowerCase().includes(search.toLowerCase()) 
    )

    const showData = () => {
        return (
            <div className="coin-app">
                <div className="coin-search">
                    <h1 className="coin-text">Top 50 Cryptocurrencies</h1>
                    <form>
                        <input
                            type="text"
                            required
                            placeholder="Search Top 50 Crypto By Their Name..."
                            className="coin-input"
                            onChange={handleChange}
                        />
                    </form>
                </div>
                {filteredCoins.map(coin => {
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
                />    
                })}
            </div>
        )
    }

   return (
       <div className="coin-container">
        {loading ? isLoading() : showData()}
        </div>     
   )
}

export default Home;