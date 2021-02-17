import React from 'react';
import './Coin.css';
 

const Coin = ({ name, image, symbol, volume, price, priceChange , market_cap }) => {
    // console.log(typeof(priceChange))
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt={name}/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>£{price ? price.toLocaleString() : 'error'}</p>
                    <p className='coin-volume'>{volume.toLocaleString() || 'error'}</p>

                    {
                        priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange}%</p>
                    )}

                    <p className='coin-marketcap'>
                        Mkt Cap: £{market_cap ? market_cap.toLocaleString() : 'error'}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Coin
