import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usernameData: '',
      passwordData: ''
    }
  }
  onLogin() {
    console.log(this.state)
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });

  }

  render() {
    return (
      <div>
        <h2 style={{ color: 'red', fontSize: 24 }}>Login Form</h2>
        <label>Enter Email id: </label>
        <input className="input-box" type="email" name="usernameData" onChange={this.handleInput.bind(this)}></input>
        <span>{this.state.usernameData}</span>
        <br></br>
        <label>Enter Password: </label>
        <input className="input-box" type="password" name="passwordData" onChange={this.handleInput.bind(this)}></input>
        <span>{this.state.passwordData}</span>
        <br></br>
        <button id="button-wrapper" onClick={() => this.onLogin()}>Login</button>
      </div >
    )
  }
}

ReactDOM.render(<AppComponent />, document.getElementById('root'));