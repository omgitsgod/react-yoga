import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Schedule from './Schedule'
import Prices from './Prices'
import { Tab, Tabs, Typography} from '@material-ui/core'

function App() {
  let view
  const [tab, setTab] = useState('Home')
  switch(tab){
      case "Home":
      view = <Home />
      break
      case "Schedule":
      view = <Schedule />
      break
      case "Prices":
      view = <Prices />
      break
      case "Location":
      view = <Home />
      break
      case "Bio":
      view = <Home />
      break
      default:
      view = <Home />
      break
    }
    const handleChange = (event, change) => {
    setTab(change)
  }
  return (
    <div className="App">
    <Tabs
      value={tab}
     onChange={handleChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      className="nav"
    >
      <Tab value={"Schedule"} label=<h2>Schedule</h2> />
      <Tab value={"Prices"} label=<h2>Prices</h2> />
      <Tab value={"Home"} label=<h2>Home</h2> />
      <Tab value={"Location"} label=<h2>Location</h2> />
      <Tab value={"Bio"} label=<h2>Bio</h2> />

    </Tabs>
    {view}
    </div>
  );
}

export default App;
