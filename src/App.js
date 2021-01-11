import react, { useEffect, useState } from "react";
import './App.css';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  const [coins, setCoins] = useState([]);

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
  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>
          Search a currency
        </h1>
        <form>
          <input 
            type='text'
            placeholder='Search'
            className='coin-input' />
        </form>
      </div>
    </div>
  );
}

export default App;
