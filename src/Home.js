import React from 'react';
import './App.css';
import Icon from '@mdi/react'
import {mdiInstagram} from '@mdi/js'


function Home() {
  return (
    <div className="App" >
      <header className="App-header">
      <div className="Welcome">
        <h1>EQUANIMITY YOGA</h1>
        <p>future you says thanks</p>
        </div>
        <a href="http://Instagram.com/equanimityyoganyc" target="blank">
        <Icon path={mdiInstagram}
          size={4}
          color="white"
        />
        </a>
      </header>
    </div>
  );
}

export default Home;
