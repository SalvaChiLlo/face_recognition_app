import React from 'react';
import './Navigation.css';
import Logo from '../logo/Logo';

const Navigation = () => {
    return (
        <nav>
            <Logo />
            <p className="f3 link dim underline pointer">Sign Out</p>
        </nav>
    );
}

export default Navigation;