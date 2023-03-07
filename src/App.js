import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import Hex from './Hex'
import Favorite from './Favorite';
import Footer from "./Footer"

export default function App() {
  const [hex, setHex] = useState([])
  const [favorite, setFavorite] = useState([])

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
  const deleteAllHex = () => setHex([])

  const addFavorite = (element) => {
    const copy = [...favorite]
    copy.push(element)
    setFavorite(copy)
  }
  const deleteFavorite = (element) => {
    const copy = [...favorite]
    copy.splice(copy.indexOf(element), 1)
    setFavorite(copy)
  }

  return (
    <div className='wrapper'>
      <div className="main">
        <Header />
        {favorite.length ? <Favorite favorite={favorite} deleteFavorite={deleteFavorite} /> : ""}
        {hex.length ? <Hex hex={hex} addFavorite={addFavorite} deleteFavorite={deleteFavorite} /> : ""}
        <div className="button">
          <button className='btn' onClick={generateHex}>Load Hex</button>
          {
            hex.length ? <button className='btn' onClick={deleteAllHex}>Clear Hex</button> : ""
          }
        </div>
      </div>
      <Footer />

    </div>
  );
}

