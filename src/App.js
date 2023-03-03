import React, { useState } from 'react';
import './App.css';

import Header from './Header';
import Hex from './Hex'

export default function App() {
  const [hex, setHex] = useState(["d1d1d1", "000000", "ffffff", "c1c1c1", "fd12e0"])
  return (
    <div>
      <Header />
      <Hex hex={hex} />
      <button className='btn'>Load Hex</button>
    </div>
  );
}

