import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      {/* <select>
        <option>Select Crytocurrency</option>
        <option>Bitcoin</option>
        <option>Ethereum</option>
        <option>Ripple</option>
        <option>Bitcoin Cash</option>
        <option>Tether</option>
        <option>Litecoin</option>
        <option>EOS</option>
        <option>Binance Coin</option>
        <option>Tron</option> 
      </select>*/}
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      
    </nav>
  );
};

export default Navbar;
