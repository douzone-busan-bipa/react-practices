import React from 'react';
import MyComponent from './MyComponent';

function App() {    
    return (
        <div id='App'>
            <MyComponent
                /* props01={'문자열'} */
                props02={200}
                props03={1-1 === 0}
                props04={{no:1, name:'둘리'}}
                props05={['Hello', 'World', 'ReactJS', 'ES6']}
                props06={() => '함수'}
                props07={200}
                props08={[true, false, true, true]}
                props09={{
                    no: 10,
                    name: '둘리',
                    email: 'dooly@gmail.com'
                }}
            />
        </div>
    );
}

export default App;
