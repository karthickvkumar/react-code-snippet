import React, { Component } from 'react';
import SubChildOne from './sub-child-one';

class ChildOne extends Component {
    render() {
        return (
            <div>
                <h3>Child One</h3>
                <SubChildOne ></SubChildOne>
            </div>
        );
    }
}

export default ChildOne;