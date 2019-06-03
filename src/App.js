import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import { Tab, Tabs, Typography} from '@material-ui/core'

function App() {
  return (
    <div className="App">
    <Tabs
      value={null}
     onChange={null}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      className="nav"
    >
      <Tab value={"Projects"} label=<h2>Schedule</h2> />
      <Tab value={"Projects"} label=<h2>Prices</h2> />
      <Tab value={"Home"} label=<h2>Home</h2> />
      <Tab value={"Resume"} label=<h2>Location</h2> />
      <Tab value={"Projects"} label=<h2>Bio</h2> />

    </Tabs>
    <Home />
    </div>
  );
}

export default App;
