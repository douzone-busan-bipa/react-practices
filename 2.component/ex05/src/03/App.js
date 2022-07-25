import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 12,
            minutes: 12,
            seconds: 30,
            session: 'am'
        }
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Class Component LifeCycle Practice</h2>
                    <Clock hours={this.state.hours} minutes={12} seconds={30} session={'pm'}/>
            </div>
        );
    }
}