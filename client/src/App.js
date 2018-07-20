import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileForm from "./pages/ProfileForm";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  <Router>
    <div>
      <Nav />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/CreateProfile" component={ProfileForm} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Results" component={Results} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>;
};

export default App;
