import React from 'react';
import './Register.css';

const Register = ({onRouteChange}) => {
    return (
        <main id="myForm" className="pa4 black-80 w-50 center bg-black-10">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="user-name" id="user-name" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                    </div>
                </fieldset>
                <div>
                    <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" defaultValue="Sign in" />
                </div>
                <div className="lh-copy mt3">
                    <a onClick={() => onRouteChange('signin')} href="#0" className="f6 link dim black db">Sign in</a>
                </div>
            </form>
        </main>
    );
}

export default Register;