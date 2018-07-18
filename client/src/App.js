import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateProfile from './pages/CreateProfile';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Results from './pages/Results';
import './App.css';

const App = () => {
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/CreateProfile" component={CreateProfile} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Results" component={Results} />
    </Switch>
  </div>
</Router>
}

export default App;
