import React from 'react';
import './Signin.css';

class Signin extends React.Component {

    constructor(props) {
        super()
        this.state = {
            signinEmail: '',
            signinPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signinEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signinPassword: event.target.value })
    }

    onSubmitSingIn = (event) => {
        event.preventDefault();
        const { onRouteChange, loadUser } = this.props
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const data = JSON.stringify({
            "email": this.state.signinEmail,
            "password": this.state.signinPassword
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
        };

        fetch("http://localhost:8000/signin", requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    loadUser(data)
                    onRouteChange('home')
                }
            })
    }

    render() {
        const { onRouteChange } = this.props
        return (
            <main id="myForm" className="pa4 black-80 w-50 center bg-black-10">
                <form onSubmit={(event) => this.onSubmitSingIn(event)} className="measure center">
                    <div id="sign_up" className="ba b--transparent ph0 mh0">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange={(event) => this.onEmailChange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={(event) => this.onPasswordChange(event)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <input onClick={(event) => this.onSubmitSingIn(event)} onSubmit={(event) => this.onSubmitSingIn(event)} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" defaultValue="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <a onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db">Register</a>
                    </div>
                </form>
            </main>
        );
    }
}

export default Signin;