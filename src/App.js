import React, { useEffect, useState } from "react";
import Coin from './Components/Coin'
import './App.css';
import Home  from "./Components/Home";
import CoinPage from './Components/CoinPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const fetchCrypto = async () => {
    try {
      const response = await fetch(url)
      const currencies = await response.json()
      // console.log(currencies);
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
    <>  
      <Router>
        <Switch>
        <Route path="/:id">
          <CoinPage handleChange={handleChange} filteredCoins={filteredCoins} />
        </Route>
        <Route path="/">
          <Home handleChange={handleChange} filteredCoins={filteredCoins} />
        </Route>
        </Switch>
        
      </Router>   
      
    </>
  );
}

export default App;
