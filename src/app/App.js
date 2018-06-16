import React, { Component } from 'react';
import AppBar from './AppBar/AppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar />

        <main>
          <div className="page__title--wrapper">
            <h2>Resistance</h2>
          </div>
          <div className="page__content">
            <div className="card">card</div>
            <div className="card">card</div>
            <div className="card">card</div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
