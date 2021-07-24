import './Hirdetes.css'
import React, { useEffect, useState } from 'react';
import Header from '../header/Header';

function Hirdetes(props) {
  const [error, setError] = useState('');

  useEffect(() => {
    fetch().then(response => response.json()).then(data => {
      //setData in any way
    }).catch(error => setError(error))
  }, [])

  return (
    <div className='mainWrapper'>
      <Header />
      <div className='hirdetesMain'>
        <img src="https://docs.google.com/drawings/d/e/2PACX-1vSvLHs4B3Euxpe4M5kNL96EtE6wi44GVAkCsnQ7L47JfWoYEieZGsuegKJLZu_usJT8c-BEiE3kgCwW/pub?w=1866&amp;h=801" />
      </div>
    </div>
  );
}

export default Hirdetes;