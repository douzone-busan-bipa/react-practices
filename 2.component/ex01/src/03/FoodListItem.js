import React from 'react';

function FoodListItem({name, quantity}) {
    return (
        <li>{name}: {quantity}</li>
    );
}

export default FoodListItem;