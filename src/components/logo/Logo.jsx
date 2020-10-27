import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import logo from './icons8_face_id_64px.png'

const Logo = () => {
    return (
        <Tilt
            className="Tilt logo"
            options={{
                reverse:        false,  // reverse the tilt direction
                max:            50,     // max tilt rotation (degrees)
            }}
        >
            <img src={logo} alt="logo" />
        </Tilt>
    );
}

export default Logo;