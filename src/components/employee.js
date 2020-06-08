import React, { Component } from 'react';

class EmployeeComponent extends Component {
    render() {
        return (
            <div className="employee-wrapper">
                <label>Full Name: </label>
                <span>{this.props.first_name + ' ' + this.props.last_name}</span>
                <br></br>
                <label>Email: </label>
                <span>{this.props.email}</span>
                <br></br>
            </div>
        );
    }
}

export default EmployeeComponent;