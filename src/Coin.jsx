import React from 'react'

const Coin = ({ name, image, symbol, volume, price, priceChange }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt={name}/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>£{price}</p>
                    <p className='coin-volume'>{volume.toLocaleString()}</p>
                    {
                        priceChange < 0 ? (
                            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                        )
                            
                    }
                </div>
            </div>
        </div>
    )
}

export default Coin
