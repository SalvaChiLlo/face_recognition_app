import React from 'react';
import './Navigation.css';
import Logo from '../logo/Logo';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return (
            <nav>
                <Logo />
                <p onClick={() => onRouteChange('signin')} className="f3 link dim underline pointer">Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav>
                <Logo />
                {/* <p onClick={() => onRouteChange('signin')} className="f3 link dim underline pointer">Sign Out</p> */}
            </nav>
        );
    }
}

export default Navigation;