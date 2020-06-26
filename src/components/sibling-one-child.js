import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SiblingOneChild extends Component {
    onTypeInputChild(event) {
        let text = event.target.value;
        this.props.passValueToSibling(text);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>SiblingOne - Child</h2>
                <input type="text" placeholder="Enter a text"
                    onChange={this.onTypeInputChild.bind(this)} />
            </div>
        );
    }
}

SiblingOneChild.propTypes = {
    //name: PropTypes.string,
    //name: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    designation: PropTypes.string,
    age: PropTypes.number,
    status: PropTypes.bool,
    //address: PropTypes.object,
    address: PropTypes.shape({
        flatno: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        area: PropTypes.string,
        city: PropTypes.string
    }),
    // language: PropTypes.array,
    language: PropTypes.arrayOf(PropTypes.string),
    onload: PropTypes.func
}

export default SiblingOneChild;