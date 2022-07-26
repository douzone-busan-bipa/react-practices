import fs from 'fs';
import update from 'react-addons-update';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8')) 
}

const updateOrder = update(state.order,{
    //  해당 패스의 값 변화1
    receive:{
        $set: '부산시 해운대구 우동....'
    },
    //  해당 패스의 값 변화2
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    products: {
        // 배열 요소 변경(패스는 배열이기 때문에 인덱스이다.)
        0: {
            amount: {
                $set: 100
            }
        },
        // 배열 요소에 추가하기
        $push: [{
            no: "c002-003",
            name: "블루양말",
            price: 2000,
            amount: 1
        }]
    } 
});

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder
    )