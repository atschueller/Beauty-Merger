import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileForm from "./pages/ProfileForm";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ProfileForm" component={ProfileForm} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Results" component={Results} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
