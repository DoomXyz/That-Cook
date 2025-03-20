import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import About from '../containers/About/About';
import Login from '../containers/Login/Login'; // Thêm Login

class AppRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} /> {/* Thêm route */}
            </Routes>
        );
    }
}

export default AppRoutes;