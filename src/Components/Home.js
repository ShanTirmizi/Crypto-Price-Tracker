import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Coin from './Coin';
import './Home.css'
import CoinPage from './CoinPage';


const Home = ({handleChange, filteredCoins}) => {


    return (
        <div className="coin-app">

            <div className='coin-search'>
                <h1 className='coin-text'>
                        Crypto Tracker
                </h1>
                <form className='coin-form'>
                    <input 
                    type='text'
                    onChange={handleChange}
                    placeholder='Search'
                    className='coin-input'
                    />
                </form>
            </div>
            <div className='coin-home-container'>
                {
                filteredCoins.map((coin) => {
                    return (
                    <Link className='coin-link' to={`/${coin.id}`}>
                        <Coin 
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        market_cap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                        />
                    </Link>
                    )
                })
                }
            </div>

      </div>
    )
}

export default Home
