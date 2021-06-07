import React from 'react'
import { Link } from 'react-router-dom'
import './Coin.css'

const Coin = ({image, name, symbol, price, volume, priceChange, id}) => {
    return (
        <div className="container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Price: ₹{price.toLocaleString()}</p>
                    <p className="coin-volume">volume: ₹{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (<p className="coin-percent green">+{priceChange.toFixed(2)}%</p>)}
                    <p className="coin-price">
                        <Link className="btn btn-outline-primary" to={`/coindata/${id}`}>View Data</Link>   
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin