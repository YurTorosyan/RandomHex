import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import Hex from './Hex'
import Footer from "./Footer"

export default function App() {
  const [hex, setHex] = useState([])

  const generateHex = () => {
    const copy = [...hex]
    for (let i = 0; i < 20; i++) {
      const randomHex = (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
      if (!copy.includes(randomHex)) {
        copy.push(randomHex)
      } else {
        i--
      }
    }
    setHex(copy)
  }
  return (
    <div className='wrapper'>
      <div className="main">
        <Header />
        <Hex hex={hex} />
        <div className="button">
          <button className='btn' onClick={generateHex}>Load Hex</button>
        </div>
      </div>
      <Footer />

    </div>
  );
}

