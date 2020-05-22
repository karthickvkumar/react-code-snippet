import React, { Component } from 'react';
import axios from 'axios';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameData: '',
            passwordData: '',
            invalidUsername: false,
            invalidPassword: false,
            onEditForm: false,
            userList: []
        }
    }

    onLogin() {
        this.setState({
            invalidUsername: this.state.usernameData === '' ? true : false,
            invalidPassword: this.state.passwordData === '' ? true : false
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
        const request = {
            "name": this.state.usernameData,
            "job": this.state.passwordData
        }
        console.log(request)
        const apiURL = 'https://reqres.in/api/users';
        axios.post(apiURL, request)
            .then((response) => {
                console.log(response.data)

            })
            .catch((error) => {
                console.error(error)
            })

    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    listAllAPI() {
        const pageOneAPI = "https://reqres.in/api/users?page=1";
        const pageTowAPI = "https://reqres.in/api/users?page=2";
        const pageThreeAPI = "https://reqres.in/api/users?page=3";

        const requestOne = axios.get(pageOneAPI);
        const requestTwo = axios.get(pageTowAPI);
        const requestThree = axios.get(pageThreeAPI);

        axios.all([requestOne, requestTwo, requestThree])
            .then(axios.spread((...responses) => {
                console.log(responses)
                const responseOne = responses[0]
                const responseTwo = responses[1]
                const responesThree = responses[2]
            })).catch(errors => {
                console.error(errors)
            })
    }

    listrUser() {
        // const apiURL = "https://shop143.herokuapp.com/api/products";
        const apiURL = "https://reqres.in/api/users?page=2";

        axios.get(apiURL)
            .then((response) => {
                this.setState({
                    userList: response.data.data
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    onDeleteUser(employee, index) {
        const empID = employee.id;
        const deleteAPI = "https://reqres.in/api/users/" + empID;
        axios.delete(deleteAPI)
            .then((response) => {
                this.state.userList.splice(index, 1);
                this.setState({
                    userList: this.state.userList
                })
            })
            .catch((error) => {

            })
    }

    handleInput(value, event) {
        value[event.target.name] = event.target.value;
        this.setState({
            userList: this.state.userList
        })
    }

    onEdit() {
        this.setState({
            onEditForm: !this.state.onEditForm
        })
    }

    render() {
        const headerStyle = { color: 'black', fontSize: 24 };

        const users = this.state.userList.map((value, index) => {
            return (
                <tr key={index}>
                    <td>
                        {!this.state.onEditForm && <span>{value.first_name}</span>}
                        {this.state.onEditForm && <input type="text" value={value.first_name} name="first_name" onChange={this.handleInput.bind(this, value)}></input>}
                    </td>
                    <td>{value.last_name}</td>
                    <td>{value.email}</td>
                    <td><img className="icon" src={value.avatar} alt={value.first_name}></img></td>
                    <td>
                        <button onClick={() => this.onEdit()}>{!this.state.onEditForm ? 'Edit' : 'Save'}</button>
                        <br></br>
                        <button onClick={() => this.onDeleteUser(value, index)}>Delete</button>
                    </td>
                </tr>
            )
        })


        const noRecord = () => {
            return (
                <tr>
                    <td colSpan="4"> No Record Found</td>
                </tr>
            )
        }

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
                <button id="button-wrapper" onClick={() => this.listrUser()}>List User</button>
                <br></br>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Picture</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userList.length == 0 ? noRecord() : users}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default LoginPage;