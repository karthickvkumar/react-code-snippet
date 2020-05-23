import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SingnUp extends Component {
    goBack() {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h2>Sign up Page!</h2>
                <br></br>
                <NavLink
                    to="/"
                    className="btn-link"
                >Go to Login Page</NavLink>

                {/* <button onClick={() => this.goBack()}>Back</button> */}
            </div>
        );
    }
}

export default SingnUp;