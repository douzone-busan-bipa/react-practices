ex04:   CSS Module 번들링 하기

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader

2. CSS Loader 설정(webpack.config.js)
    module:{
        rules:[{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }]
    }

3. 개발 서버 실행
[ex04]$ npm start