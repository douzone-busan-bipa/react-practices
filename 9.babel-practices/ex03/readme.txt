3. Babel Plugin: 변환규칙
1) 설치
    [ex03]$ npm i -D @babel/core @babel/cli
2) 플러그인 적용

    -  블록 스코프 변수 플러그인(@babel/plugin-transform-block-scoping) 
        [ex03]$ npm i -D @babel/plugin-transform-block-scoping
        [ex03]$ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping

    -  객체분해 - 파라미터 플러그인(@babel/plugin-transform-parameters)
    -  리터럴 문자열 플러그인(@babel/plugin-transform-template-literals)
    -  for..of 플러그인(@babel/plugin-transform-for-of)
        [ex03]$ npm i -D  @babel/plugin-transform-parameters @babel/plugin-transform-template-literals @babel/plugin-transform-for-of
        [ex03]$ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-for-of 


