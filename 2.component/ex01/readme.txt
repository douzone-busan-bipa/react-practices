ex01: Property(props)

1) 컴포넌트의 데이터
2) 부모에서 자식으로 전달
    - Component Communication(컴포넌트간의 통신), Data Flow
    - Top -> Down
3) 자식 컴포넌트에서 변경 불가
4) 부모가 소유하는 데이터      

src/01 : FoodList: 클래스 컴포넌트 
src/02 : FoodList: Data Flow(Top -> Down): 클래스 컴포넌트
src/03 : FoodList: Data Flow(Top -> Down): 함수 컴포넌트
src/04 : Validation

======================================================================================
1. 설치
[ex01]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
[ex01]$ npm i react react-dom

2. 설정
babel.config.json
webpack.config.js

3. npm scripting

4. 실행
[ex01]$ npm run debug src=(01|02|03|04|05|06|07|08)
