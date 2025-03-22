// src/containers/App.js
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../routes';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <AppRoutes />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;