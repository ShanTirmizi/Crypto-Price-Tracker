import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CoinPage.css';

const CoinPage = ({ filteredCoins, handleChange }) => {
    let { id } = useParams();
    const Crypto = filteredCoins.find((x) => x.id === id)

        console.log(Crypto)
      if(!Crypto) {
        return  <div>Crypto Not Found</div>
    }

    return (
        <div className='coinPage'>
            <div className='coinPage-search'>
                <Link to='/'>
                    <img className='coinPage-img' src={Crypto.image} />
                </Link>

                {/* <form className='coinPage-form'>
                    <input 
                    type='text'
                    onChange={handleChange}
                    placeholder='Search'
                    className='coinPage-input'
                    />
                </form> */}
            </div>

            <div className='coinPage-cointainer'>
                <div className='coinPage-link-h3'>
                    <Link className='coinPage-link' to='/'>Back to Home Page</Link>
                    <Link className='coinPage-coin-name' to='/'>
                        <h3 >{Crypto.name}</h3>
                    </Link>
                </div>
                <div className='coinPage-section'>
                    <div className='coinPage-section1'>
                        <div className='coinPage-sectionlp'>
                            <p className='coinPage-name'>Price</p>
                            <p className='coinPage-value'>£{Crypto.current_price.toLocaleString()}</p>
                        </div>
                        <div className='coinPage-sectionlp'>
                            <p className={`${Crypto.price_change_24h < 0 ? 'coinPage-name red' : 'coinPage-name green' }`}>Price Change 24hr</p>
                            <p className={`${Crypto.price_change_24h < 0 ? 'coinPage-value red' : 'coinPage-value green' }`}>£{Crypto.price_change_24h.toLocaleString()}</p>
                        </div>
                        <div className='coinPage-sectionlp'>
                            <p className={`${Crypto.price_change_percentage_24h < 0 ? 'coinPage-name red' : 'coinPage-name green' }`}>Price Change Percentage</p>
                            <p className={`${Crypto.price_change_percentage_24h < 0 ? 'coinPage-value red' : 'coinPage-value green' }`}>{Crypto.price_change_percentage_24h}%</p>
                        </div>
                        <div className='coinPage-sectionlp'>
                            <p className='coinPage-name green'>Circulating Supply</p>
                            <p className='coinPage-value green'>{Crypto.circulating_supply.toLocaleString()}</p>
                        </div>
                        <div className='coinPage-sectionlp'>
                            <p className='coinPage-name green'>24hr High</p>
                            <p className='coinPage-value green'>£{Crypto.high_24h.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className='coinPage-section2'>                 
                        <div className='coinPage-sectionp'>
                            <p className='coinPage-name'>Market Cap Rank</p>
                            <p className='coinPage-value'>{Crypto.market_cap_rank}</p>
                        </div>
                        <div className='coinPage-sectionp'>
                            <p className='coinPage-name red'>24hr Low</p>
                            <p className='coinPage-value red'>£{Crypto.low_24h.toLocaleString()}</p>
                        </div>
                        <div className='coinPage-sectionp'>
                            <p className={`${Crypto.price_change_24h < 0 ? 'coinPage-name red' : 'coinPage-name green' }`}>Marketcap</p>
                            <p className={`${Crypto.price_change_24h < 0 ? 'coinPage-value red' : 'coinPage-value green' }`}>£{Crypto.market_cap.toLocaleString()}</p>
                        </div>
                        <div className='coinPage-sectionp'>
                            <p className={`${Crypto.price_change_percentage_24h < 0 ? 'coinPage-name red' : 'coinPage-name green' }`}>Marketcap 24hr Change</p>
                            <p className={`${Crypto.price_change_percentage_24h < 0 ? 'coinPage-value red' : 'coinPage-value green' }`}>£{Crypto.market_cap_change_24h.toLocaleString()}</p>
                        </div>
                        <div className='coinPage-sectionp'>
                            <p className={`${Crypto.price_change_percentage_24h < 0 ? 'coinPage-name red' : 'coinPage-name green' }`}>Marketcap 24hr Percentage Change</p>
                            <p className={`${Crypto.price_change_percentage_24h < 0 ? 'coinPage-value red' : 'coinPage-value green' }`}>{Crypto.market_cap_change_percentage_24h}%</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinPage
