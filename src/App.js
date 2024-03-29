import React from 'react';
import User from './components/User';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={User} />
          <Route path="/about" component={User} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
