## backend

#### 테스트
eclipse Ctrl+F11 (IDE Run)

#### 빌드
```sh
$ mvn -f kanbanboard/backend exec:exec clean package
```
1.  결과: kanbanboard/backend/target/kanbanboard07.jar
2.  실행
    ```
    $ java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard07.jar
    ```

#### ssh 연결(ssh key 사용하기)
1.  key 생성하기
```
$ ssh-keygen -t rsa -b 2048 -m PEM -c "kicskcar@gmail.com"
```

2. 생성확인
   - id_rsa: private key
   - id_rsa.pub: public key 


## frontend
#### 설치
```sh
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-syntax-throw-expressions @babel/plugin-transform-runtime
$ npm i react react-dom prop-types react-addons-update react-router react-router-dom
```

#### 설정
1.  config/babel.config.json
2.  config/webpack.config.js

#### npm 스크립팅
```json
  "scripts": {
    "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "build": "npm install && npx webpack --config config/webpack.config.js --mode production"
  }
```

#### 테스트
```sh
$ npm start
```

#### 빌드
```sh
$ npm run build
```
