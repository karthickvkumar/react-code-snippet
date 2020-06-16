import React, { Component } from 'react';
import EmployeeComponent from './employee';
import SearchBoxComponent from './search-box';
import axios from 'axios';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeList: [],
            filteredEmployee: [],
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
                        filteredEmployee: response.data.data,
                        loader: false
                    })
                })
                .catch((error) => {
                    console.error(error)
                })
        }, 3000)
    }

    listernSearchKey(text) {
        const filtered = this.state.employeeList.filter((user) => {
            return user.first_name.indexOf(text) > -1
        });
        this.setState({
            filteredEmployee: filtered
        })
    }

    render() {
        console.log(this.props.history.location)
        return (
            <div>
                <h2>Welcome - {this.props.history.location ? this.props.history.location.state.name : ''}</h2>
                <SearchBoxComponent attrPlaceholder="Search user by first name.."
                    handleSearchInput={this.listernSearchKey.bind(this)}></SearchBoxComponent>
                {
                    this.state.loader ? <h3>Loading...</h3> :
                        <EmployeeComponent employeeList={this.state.filteredEmployee}></EmployeeComponent>
                }

            </div>
        );
    }
}

export default AboutPage;