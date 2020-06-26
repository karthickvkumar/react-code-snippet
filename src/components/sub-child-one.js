import React, { Component } from 'react';
import settingContextAPI from '../context/setting-context-api';

class SubChildOne extends Component {

    handleText(event) {
        let text = event.target.value;
        this.context.receiveMessage(text)
    }

    render() {
        return (
            <settingContextAPI.Consumer>
                {(context) => {
                    return (
                        <div>
                            <h3>Sub Child One</h3>
                            <input type="text" placeholder="enter a user name.."
                                onChange={this.handleText.bind(this)}></input>
                        </div>
                    )
                }}
            </settingContextAPI.Consumer>
        );
    }
}
SubChildOne.contextType = settingContextAPI;

export default SubChildOne;