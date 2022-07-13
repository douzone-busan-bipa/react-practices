ex02:   번들링 환경(webpack.config.js) 설정하기

1. 설치 패키지
[ex02]$ npm i -D webpack webpack-cli express

2. 번들링 환경 설정(webpack.config.js)
- entry
- output

3. 스크립팅
"scripts": {
    "build": "npx webapck",
    "start": "node dev-server"
}

4. 빌드
[ex02]$ npm run build

5. 애플리케이션 실행(테스트 서버 실행)
[ex02]$ npm start