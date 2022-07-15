import React from 'react';
import FoodList from './FoodList';

function App() {

    const foods = [{
        no: 1,
        name: 'Egg',
        quantity: 20
    }, {
        no: 2,
        name: 'Milk',
        quantity: 10
    }, {
        no: 3,
        name: 'Bread',
        quantity: 2
    }];
    
    return (
        <div id='App'>
            <FoodList 
                foods={foods} />
        </div>
    );
}

export default App;
