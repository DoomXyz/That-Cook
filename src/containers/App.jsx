import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import HomeLink from '../components/HomeLink';
import Footer from '../components/Footer';
import AppRoutes from '../routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <HomeLink />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;