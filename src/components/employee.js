import React, { Component } from 'react';

class EmployeeComponent extends Component {
    render() {
        const employees = this.props.employeeList.map((user, index) => {
            return (
                <div key={index} className="employee-wrapper">
                    <div>
                        <img className="thumbnail" src={user.avatar}></img>
                    </div>
                    <div>
                        <label>Full Name: </label>
                        <span>{user.first_name + ' ' + user.last_name}</span>
                        <br></br>
                        <label>Email: </label>
                        <span>{user.email}</span>
                    </div>
                </div>
            )
        });
        return (
            <div>
                {employees}
            </div>
        );
    }
}

export default EmployeeComponent;