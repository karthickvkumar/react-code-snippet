import React, { Component } from 'react';
import EmployeeComponent from './employee';
import axios from 'axios';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeList: [],
            loader: true
        }
    }

    componentDidMount() {
        const url = "https://reqres.in/api/users?page=2";
        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    this.setState({
                        employeeList: response.data.data,
                        loader: false
                    })
                })
                .catch((error) => {
                    console.error(error)
                })
        }, 3000)
    }

    render() {
        const employees = this.state.employeeList.map((user, index) => {
            return (
                <EmployeeComponent key={index}
                    {...user} >
                </EmployeeComponent>
            )
        });
        return (
            <div>
                <h2>This is an About Page</h2>
                {
                    this.state.loader ? <h3>Loading...</h3> : employees
                }

            </div>
        );
    }
}

export default AboutPage;