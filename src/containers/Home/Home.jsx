import React, { Component } from 'react';
import Hero from './Hero';
import Content from './Content';
import '../../styles/home.scss'; // Style riêng cho Home

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Hero />
                <Content />
            </div>
        );
    }
}

export default Home;