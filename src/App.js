import React, { useEffect, useState, useRef, err } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import { init } from './web3client';


function App() {
  useEffect(() => {
    init();
    
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
