import React, { Component } from 'react';
import SiblingOneChild from './sibling-one-child';

class SiblingOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'MR.A',
            designation: 'UI Developer',
            age: 24,
            status: true,
            address: {
                flatno: 12,
                area: 'xyz',
                city: 'chennai'
            },
            language: [],
            onload() {
                //code block
            }
        }
    }
    // onTypeInput(event) {
    //     let text = event.target.value;
    //     this.props.onSendText(text);
    // }

    passFromSiblingOne(text) {
        this.props.onSendText(text);
    }

    render() {
        return (
            <div>
                <h2>SiblingOne</h2>
                {/* <input type="text" placeholder="Enter a text"
                    onChange={this.onTypeInput.bind(this)} /> */}
                <SiblingOneChild
                    {...this.state}
                    passValueToSibling={this.passFromSiblingOne.bind(this)}>

                </SiblingOneChild>
            </div>
        );
    }
}

export default SiblingOne;