import React, { useEffect, useState } from "react";
import Coin from './Coin'
import './App.css';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const fetchCrypto = async () => {
    try {
      const response = await fetch(url)
      const currencies = await response.json()
      console.log(currencies);
      setCoins(currencies);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCrypto()
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>
          Search a currency
        </h1>
        <form>
          <input 
            type='text'
            onChange={handleChange}
            placeholder='Search'
            className='coin-input'
            />
        </form>
      </div>
      {
        filteredCoins.map((coin) => {
          return (
            <Coin 
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            />
          )
        })
      }
    </div>
  );
}

export default App;
