import React, { Component } from 'react';

class SiblingOne extends Component {
    onTypeInput(event) {
        let text = event.target.value;
        this.props.onSendText(text);
    }

    render() {
        return (
            <div>
                <h2>SiblingOne</h2>
                <input type="text" placeholder="Enter a text"
                    onChange={this.onTypeInput.bind(this)} />
            </div>
        );
    }
}

export default SiblingOne;