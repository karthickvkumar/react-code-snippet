import React, { Component } from 'react';

class SearchBoxComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleSearchInput(event) {
        let text = event.target.value;
        this.props.handleSearchInput(text);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder={this.props.attrPlaceholder}
                    onChange={this.handleSearchInput.bind(this)} />
            </div>
        );
    }
}

export default SearchBoxComponent;