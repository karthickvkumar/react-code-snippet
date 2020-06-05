import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.usernameTextInput = React.createRef();
        this.passwordTextInput = React.createRef();
        this.spanRef = React.createRef();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    onClickLogin() {
        const loginResponse = {
            name: this.usernameTextInput.current.value,
            password: this.passwordTextInput.current.value
        }
        console.info(loginResponse)
        this.spanRef.current.innerHTML = "Successfully Login"

        // const loginResponse = {
        //     name: this.state.username,
        //     password: this.state.password
        // }
        // console.info(loginResponse)
        //this.props.history.push('/home', loginResponse)
    }

    // componentDidMount() {
    //     this.passwordTextInput.current.focus();
    // }

    onRegister() {
        this.props.history.push({
            pathname: '/signup',
            data: this.state
        });
    }

    handleLogin(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h3>Login to Dashboard</h3>
                <NavLink to="/home">GO to Home</NavLink>
                <br></br>
                <label>Enter UserName:</label>
                {/* <input type="email" name="username" onChange={this.handleLogin.bind(this)} /> */}
                <input type="email" ref={this.usernameTextInput} />
                <br></br>
                <label>Enter Password:</label>
                {/* <input type="password" name="password" onChange={this.handleLogin.bind(this)} /> */}
                <input type="password" ref={this.passwordTextInput} />
                <br></br>
                {/* <span>{this.state.username}</span> */}
                <br></br>
                <span ref={this.spanRef}></span>
                <button className="button" onClick={() => this.onClickLogin()}>Login</button>
                <button className="button" style={{ marginLeft: '10px' }} onClick={() => this.onRegister()}>onRegister</button>
            </div >
        )
    }
}

export default Login;