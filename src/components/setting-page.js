import React, { Component } from 'react';
import ChildOne from './child-one';
import ChildTwo from './child-two';
import settingContextAPI from '../context/setting-context-api';


class SettingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    updateMessage(text) {
        this.setState({
            message: text
        })
    }

    render() {
        return (
            <settingContextAPI.Provider value={
                {
                    ...this.state,
                    receiveMessage: this.updateMessage.bind(this)
                }}>
                <h2>This is a settings page</h2>
                <ChildOne></ChildOne>
                <ChildTwo></ChildTwo>
            </settingContextAPI.Provider>
        );
    }
}

export default SettingPage;