import React from 'react';

function App() {
    return (
        <div>
            <h2>app01</h2>
            <p>JSX Tutorial - 특징1: HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case
            */}
            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫는다.
                오류) <br>, <hr>, <input type='text'>, <img src=''>
            */}
            <br/>
            <hr/>
            <img src=''/>
            {/*
                3. 속성 이름은 DOM API와 일치한다.(HTML Tag의 속성이름 x)
                   <h4 class='header' id='title'>타이틀</h4>
                   document.getElementById('title').className='header'; 
            */}
            <h4 className='header' id='title'>타이틀</h4>
        </div>
    );
}

export default App;