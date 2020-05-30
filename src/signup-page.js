import React, { Component } from 'react';

class SingnUp extends Component {
    constructor(props) {
        super(props);
        this.handleDate = this.handleDate.bind(this);
        this.state = {
            first_name: '',
            last_name: '',
            email_address: '',
            gender: '',
            hobbies: [],
            street_name: '',
            city: '',
            state_name: '',
            first_name_error: false,
            last_name_error: false
        }
    }
    goBack() {
        this.props.history.push('/')
    }
    handleDate(event) {
        if (this.state[event.target.name] instanceof Array) {
            if (event.target.checked) {
                this.state[event.target.name].push(event.target.value)
            } else {
                this.state[event.target.name].pop()
            }
            this.setState({
                [event.target.name]: this.state[event.target.name]
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    onBlured(event) {
        console.log(event.target.name)
        let key = event.target.name + '_error';
        this.setState({
            [key]: event.target.value == '' ? true : false
        })
    }

    onFocused(event) {
        console.log(event.target.name)
        let key = event.target.name + '_error';
        this.setState({
            [key]: false
        })
    }

    onFormSubmit() {
        console.log(this.state)
    }

    render() {
        const cities = [
            { name: 'Chennai', country_code: 'IN' },
            { name: 'New York', country_code: 'USA' },
            { name: 'Tokyo', country_code: 'JN' },
            { name: 'Beijin', country_code: 'CH' },
            { name: 'Paris', country_code: 'FR' },
        ];

        const states = [
            { name: 'Tamil Nadu', country_code: 'IN' },
            { name: 'Kerala', country_code: 'IN' },
            { name: 'Maharstra', country_code: 'IN' },
            { name: 'Washington', country_code: 'USA' },
            { name: 'Chicago', country_code: 'USA' },
            { name: 'Texas', country_code: 'USA' },
            { name: 'State - 1 Japan', country_code: 'JN' },
            { name: 'State - 2 Japan', country_code: 'JN' },
            { name: 'State - 3 Japan', country_code: 'JN' },
            { name: 'State - 1 China', country_code: 'CH' },
            { name: 'State - 2 China', country_code: 'CH' },
            { name: 'State - 3 China', country_code: 'CH' },
            { name: 'State - 1 France', country_code: 'FR' },
            { name: 'State - 2 France', country_code: 'FR' },
            { name: 'State - 3 France', country_code: 'FR' },
        ];

        let citiesList = cities.map((city, index) => {
            return (
                <option key={index} value={city.country_code}>{city.name}</option>
            )
        });

        let stateList = states.filter((state) => {
            return this.state.city == state.country_code;
        }).map((state, index) => {
            return (
                <option key={index} value={state.name}>{state.name}</option>
            )
        });

        return (
            <div>
                <h2>Sign up Page!</h2>
                <label>Enter First Name</label>
                <input type="text" name="first_name" onChange={this.handleDate} onBlur={this.onBlured.bind(this)} onFocus={this.onFocused.bind(this)} className={this.state.first_name_error ? 'error-input' : ''} />
                {this.state.first_name_error && <span className="error-msg">please enter your full name</span>}
                <br></br>
                <label>Enter Last Name</label>
                <input type="text" name="last_name" id="Last-Name" onChange={this.handleDate}
                    onBlur={this.onBlured.bind(this)} onFocus={this.onFocused.bind(this)}
                    className={this.state.last_name_error ? 'error-input' : ''} />
                {this.state.last_name_error && <span className="error-msg">pleses enter your last name</span>}
                <br></br>
                <label>Enter Email Address</label>
                <input type="text" name="email_address" id="Email-Address" onChange={this.handleDate} />
                <br></br>
                <label>Select Gender</label>
                <input type="radio" name="gender" value="male" onChange={this.handleDate} />Male
                <input type="radio" name="gender" value="female" onChange={this.handleDate} />Female
                <input type="radio" name="gender" value="others" onChange={this.handleDate} />Others
                <br></br>
                <label>Prefered Hobbies</label>
                <input type="checkbox" name='hobbies' value="cricket" onChange={this.handleDate} />Cricket
                <input type="checkbox" name='hobbies' value="football" onChange={this.handleDate} />Foot Ball
                <input type="checkbox" name='hobbies' value="hockey" onChange={this.handleDate} />Hockey
                <br></br>
                <label>Enter Street Name</label>
                <input type="text" name="street_name" onChange={this.handleDate} />
                <br></br>
                <label>Select your city</label>
                <select onChange={this.handleDate} name='city'>
                    <option>please select city</option>
                    {citiesList}
                </select>
                <br></br>
                <label>Select your state</label>
                <select value={this.state.state_name} onChange={this.handleDate} name="state_name">
                    <option value=''>please select state</option>
                    {stateList}
                </select>
                <br></br>
                <button onClick={() => this.onFormSubmit()}>Sign Up</button>
            </div>
        );
    }
}

export default SingnUp;