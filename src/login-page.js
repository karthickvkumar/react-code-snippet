import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameData: '',
            passwordData: '',
            invalidUsername: false,
            invalidPassword: false
        }
    }

    onLogin() {
        this.setState({
            invalidUsername: this.state.usernameData == '' ? true : false,
            invalidPassword: this.state.passwordData == '' ? true : false
        })
        // if (this.state.usernameData == '') {
        //   this.setState({
        //     invalidUsername: true
        //   })
        // } else {
        //   this.setState({
        //     invalidUsername: false
        //   })
        // }
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const headerStyle = { color: 'black', fontSize: 24 };
        return (
            <div>
                <h2 style={headerStyle}>Login Form</h2>
                <label>Enter Email id: </label>
                <input className="input-box" type="email" name="usernameData" onChange={this.handleInput.bind(this)}></input>
                {this.state.invalidUsername && <span>Please enter the username</span>}
                <br></br>
                <label>Enter Password: </label>
                <input className="input-box" type="password" name="passwordData" onChange={this.handleInput.bind(this)}></input>
                {this.state.invalidPassword && <span>Please enter the password</span>}
                <br></br>
                <button id="button-wrapper" onClick={() => this.onLogin()}>Login</button>
            </div >
        );
    }
}

export default LoginPage;