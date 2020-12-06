import React from 'react';
import './Register.css';

class Register extends React.Component {

    constructor(props) {
        super()
        this.state = {
            registerEmail: '',
            registerPassword: '',
            registerName: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value })
    }

    onNameChange = (event) => {
        this.setState({ registerName: event.target.value })
    }

    onSubmitRegister = (event) => {
        event.preventDefault();
        const { onRouteChange, loadUser } = this.props
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const data = JSON.stringify({
            "name": this.state.registerName,
            "email": this.state.registerEmail,
            "password": this.state.registerPassword,
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
        };
        fetch("http://localhost:8000/register", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.id) {
                    onRouteChange('home')
                    loadUser(data)
                }
            })
            .catch(err => console.log(err, 'error'))
    }


    render() {
        const { onRouteChange } = this.props
        return (
            <main id="myForm" className="pa4 black-80 w-50 center bg-black-10">
                <form className="measure center">
                    <div id="sign_up" className="ba b--transparent ph0 mh0">

                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange={(event) => this.onEmailChange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
                                <input onChange={(event) => this.onNameChange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="user-name" id="user-name" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={(event) => this.onPasswordChange(event)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <button onClick={(event) => this.onSubmitRegister(event)} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Register</button>
                    </div>
                    <div className="lh-copy mt3">
                        <a onClick={() => onRouteChange('signin')} href="#0" className="f6 link dim black db">Sign in</a>
                    </div>
                </form>
            </main>
        );
    }
}

export default Register;