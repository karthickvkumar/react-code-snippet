import React, { Component } from 'react';
import settingContextAPI from '../context/setting-context-api';

class ChildTwo extends Component {

    render() {
        return (
            <settingContextAPI.Consumer>
                {(context) => {
                    return (
                        <div>
                            <h3>Child Two</h3>
                            <span>{context.message}</span>
                        </div>
                    )
                }}
            </settingContextAPI.Consumer>
        );
    }
}
ChildTwo.contextType = settingContextAPI;

export default ChildTwo;