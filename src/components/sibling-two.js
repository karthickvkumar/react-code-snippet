import React, { Component } from 'react';

class SiblingTwo extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    render() {
        return (
            <div>
                <h2>SiblingTwo</h2>
                <span>The Entered Name is: {this.props.attrMessage}</span>
            </div>
        );
    }
}

export default SiblingTwo;