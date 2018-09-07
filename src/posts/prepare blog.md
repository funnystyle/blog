---
title: prepare for making blog
date: 2018-09-08T02:00:00.000Z
---

1. github repository 생성
    > https://www.github.com/funnystyle/blog

2. github desktop 설치

    > https://desktop.github.com/
    

3. repository clone
    - D:\dev\github\blog 에 클론함

4. VSCode 설치
    
    > https://code.visualstudio.com/

    - VSCode plugin 설치
        - Atom Keymap
        - Korean Language Pack for Visual Studio Code
        - Markdown Preview Github Styling
        - EditorConfig for VS Code
        
    - terminal default 를 git bash 로 변경(개취)

5. git 설치
    
    > https://git-scm.com/

6. nodejs 설치
    
    > https://nodejs.org/ko/
    

7. gatsby 설치
    ```shell
    $ npm install --global gatsby-cli
    ```

8. gatsby-starter-default download

    > https://github.com/gatsbyjs/gatsby-starter-default  
    > zip 파일을 다운받아 D:\dev\github\blog 에 압축 해제 후 아래 코드 실행

    ```shell
    $ npm install
    $ gatsby develop
    ```
    > http://localhost:8000 에서 화면 확인

9. package.json 정보 변경
    ```javascript
    // package.json

    {
      "name": "funnyblog",
      "description": "funnystyle's develop books review blog",
      "author": "funnystyle <esero082@gmail.com>",

      "repository": {
        "type": "git",
        "url": "https://github.com/funnystyle/blog"
      }
    }
    ```

10. editorconfig 설정
    > https://editorconfig.org/  
    > https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig  
    > https://stackoverflow.com/questions/47357322/editorconfig-for-visual-studio-code

11. deploy to github pages
    > https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/  
    
    ```javascript
    // package.json

    "scripts": {
      "deploy": "gatsby build && gh-pages -d public -b master -r https://github.com/funnystyle/funnystyle.github.io"
    },
    ```

12. netlify
    > https://www.netlify.com/  
    > github 계정으로 로그인 후  
    > 해당 repository 만 deploy 설정하면 끝
