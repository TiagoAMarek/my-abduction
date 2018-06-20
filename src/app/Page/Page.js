import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <main className="page">
        <div className="page__title--wrapper">
          <h2>Resistance</h2>
        </div>
        <div className="page__content">
          <div className="card">card</div>
          <div className="card">card</div>
          <div className="card">card</div>
        </div>
      </main>
    );
  }
}

export default Page;
