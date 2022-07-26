import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8')) 
}

let updateOrder = Object.assign({}, state.order, {
    receive: '부산시 해운대구 우동....'
});

updateOrder.payment.method = 'Mobile';

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment)