import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils';

import './App.css';


export default class app extends Component  {
  state = {
    currentUser: null
  }
  
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>{/*This contains the routing for the different pages and the back-button */}
          <Route exact path="/" component={HomePage} /> 
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
