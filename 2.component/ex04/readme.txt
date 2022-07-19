ex04: State

01. 기본 개념
    1) state
        - 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
        - 컴포넌트 this.state 안에 여러 데이터(상태)를 가질 수 있다.
        - this.state 특정 컴포넌트 전용이다.
        - "상태가 변경되면 컴포넌트의 반응형(Reactive) 렌더링의 트리거가 되고 컴포넌트와 자식 컴포넌트 다시 렌더링 된다."
        - 클래스 컴포넌트에서는 constructor 안에서 상태를 초기화 한다.
        - 클래스 컴포넌트에서는 상태 변경을 위해서 반드시 setState 함수를 사용한다.
        - 함수 컴포넌트에서는 useState 후크(hook) 함수를 사용해서 초기화 한다.
        - 함수 컴ㄹ포넌트에서는 상태 변경을 위해 userState 후크 함수에서 반환된 배열의 두번째 요소를 함수로 사용한다.

    2) 예제 src/01
02. 제어 컴포넌트
    4) 제어 컴포넌트: 예제 src/02
    5) 비제어 컴포넌트: 예제 src/03

03. 상태 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
    예제: emaillist

04. Data Flow(Bootom -> up)
    예제: emaillist



======================================================================================
1. 설치
[ex04]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
[ex04]$ npm i react react-dom prop-types

2. 설정
babel.config.json
webpack.config.js

3. npm scripting

4. 실행
[ex04]$ npm run debug src=(01|02|...)
