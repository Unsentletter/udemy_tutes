import React, { Component } from 'react';
import './App.css';
import Items from '../containers/Items';
import ShoppingCart from '../containers/ShoppingCart';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Items />
        <ShoppingCart />
      </div>
    );
  }
}
