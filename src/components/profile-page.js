import React, { Component } from 'react';
import SiblingOne from './sibling-one';
import SiblingTwo from './sibling-two';

class ProfilePage extends Component {
    getText(text) {
        console.log(text)
    }
    render() {
        return (
            <div>
                <h2>This is a Profile Page</h2>
                <SiblingOne onSendText={this.getText.bind(this)}></SiblingOne>
                <SiblingTwo></SiblingTwo>
            </div>
        );
    }
}

export default ProfilePage;