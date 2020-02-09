import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

import './App.css';


function App() {
  return (
    <div>
      <Switch>{/*This contains the routing for the different pages and the back-button */}
        <Route exact path="/" component={HomePage} /> 
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
