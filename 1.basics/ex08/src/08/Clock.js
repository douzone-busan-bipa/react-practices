    import React from 'react';

    function Clock() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return (
            /*
                comment01: JSX 밖은 JavaScript 구문(주석 구문)이 가능하다.
            */
            <div
                /*
                    comment02: 여기서도 JavaScript 주석이 가능하다: 비추
                */
                className='clock'
                title='시계'>
                {/*
                    comment03: 이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야 한다: 강추
                        
                */}    
                {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
                {' : '}
                {/*
                    comment03: JSX는 HTML이 아니다!!!!!
                    <!--   --> HTML 주석은 사용할 수 없다.
                */}
                {('0' + minutes).slice(-2)}
                {' : '} 
                {(('0')+seconds).slice(-2)}
                {' '}
                // comment04: JSX 안에서 JavaScript 주석 구문을 사용하면 그대로 화면에 나온다. 
                {hours > 12 ? 'PM': 'AM'}
            </div>
        );
    }

    export default Clock;