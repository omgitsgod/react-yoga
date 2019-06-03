import React from 'react';
import './App.css';
import Icon from '@mdi/react'
import {mdiInstagram} from '@mdi/js'


function Schedule() {
  return (
    <div className="lala" >
      <header className="App-header">
      <div className="Welcome">
      <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%2366ffff&amp;src=6ng91c5o6276gumgele4jcvldk%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=America%2FNew_York"
            title="cal" className="cal"  width="400" height="400" frameborder="0" scrolling="no"></iframe>
        </div>

      </header>
    </div>
  );
}

export default Schedule;
