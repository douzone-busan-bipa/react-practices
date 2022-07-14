4. Env Preset: 변환규칙모음
1) Preset
    - 여러 플러그인의 변환 규칙을 한 번에 적용하기 위해 미리 관련 플러그인을 모아 놓은 것
    - 종류
        1. ECMAScript 년도별(버젼별)로 모아 놓은 것들
        2. ECMAScript stage(level 0, 1, 2, 3)로 모아 놓은 것들
        3. 3rd party(TypeScript, React)
        등 다양하다.
    - Env Preset은 ECMAScript stage 3레벨 이상의 문법 플러그인들의 모음
    - Env Preset 뿐만 아니라 다양한 preset과 plugin 들을 babel 설정을 통해서 적용할 수 있다(babel.config.json) 
2) 설치
    [ex04]$ npm i -D @babel/core @babel/cli @babel/preset-env

3) Env Preset의 플러그인 확인
    [ex04]$ npm list --depth=1 | grep @babel/plugin-

4) Env Preset 설정
    - 타겟 브라우저를 설정하는 방식
    - 브라우저별 es6 호환성 테이블(https://kangax.github.io/compat-table/es6)
5) 변환 하기
    [ex04]$ npx babel src/ex.js -o dist/ex.js