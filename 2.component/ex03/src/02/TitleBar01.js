import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(props) {
        super(props);        
        this.no = 10;
    }

    onClickHandler() {
        console.log('TitelBar01 clicked!:' + this.no);
    }

    render() {
        return (
            <h1
                onClick={this.onClickHandler.bind(this)}
                style={{
                    cursor: 'pointer'
                }}>
                Function Handler(Class Component)
            </h1>
        )
    }
}