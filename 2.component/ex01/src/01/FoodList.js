import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

class FoodList extends Component {

    render() {
        return (
            <div>
                <ul>
                    <FoodListItem
                        name='Bread'
                        quantity='2'/>
                    <FoodListItem
                        name='Milk'
                        quantity='5'/>
                    <FoodListItem
                        name='Egg'
                        quantity='20'/>
                </ul>
            </div>
        );
    }
}

export default FoodList;