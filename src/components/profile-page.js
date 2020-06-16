import React, { Component } from 'react';
import SiblingOne from './sibling-one';
import SiblingTwo from './sibling-two';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textMessage: ''
        }
    }
    getText(text) {
        this.setState({
            textMessage: text
        })
    }
    render() {
        return (
            <div>
                <h2>This is a Profile Page</h2>
                <SiblingOne onSendText={this.getText.bind(this)}></SiblingOne>
                <SiblingTwo attrMessage={this.state.textMessage}></SiblingTwo>
            </div>
        );
    }
}

export default ProfilePage;