import React, { Component } from 'react';

class FoodListItem extends Component {
    render() {
        return (
            <li>{this.props.name}: {this.props.quantity}</li>
        );
    }
}

export default FoodListItem;