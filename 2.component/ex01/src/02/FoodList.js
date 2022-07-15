import React, { Component } from 'react';
import FoodListItem from './FoodListItem';

class FoodList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const components = [];
        // this.props.foods.forEach(function(food){
        //     components.push(<FoodListItem name={food.name} quantity={food.quantity} />);
        // })

        // const result = [1, 2, 3, 4].map(function(e){
        //    return e*e;
        // });
        // console.log(result);

        return (
            <div>
                <ul>
                    {this.props.foods.map((food) => <FoodListItem
                                                        key={food.no}
                                                        name={food.name}
                                                        quantity={food.quantity} />)}
                </ul>
            </div>
        );
    }
}

export default FoodList;