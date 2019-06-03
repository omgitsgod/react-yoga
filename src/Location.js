import React from 'react';
import './App.css';
import Icon from '@mdi/react'
import {mdiInstagram} from '@mdi/js'


function Location() {
  return (
    <div className="location" >
      <header className="App-header">
      <div className="Welcome">
      <div className="smaller">
        <h2>Location</h2>
        <p>34 Ave A between 2nd & 3rd street</p>
        <p>Buzzer 2 : Sei Shin Dojo</p>

      </div>
      <div class="mapouter">
        <div class="gmap_canvas"><iframe width="400" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=equanimity yoga nyc&t=&z=13&ie=UTF8&iwloc=&output=embed" title="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default Location;
