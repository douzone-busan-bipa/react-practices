ex05:   SASS/SCSS 모듈 번들링 하기

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2. SASS/SCSS Loader 설정(webpack.config.js)
    module:{
        rules:[{
            test: /\.(sa|sc|c)ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }

3. 개발 서버 실행
[ex04]$ npm start