import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeLink = () => {
    const location = useLocation();
    if (location.pathname === '/') {
        return null;
    }
    return (
        <Link to="/" className="home-link">
            Quay về Trang chủ
        </Link>
    );
};

export default HomeLink;