import{o as n,c as e,a as l,b as t}from"./app.51a0c38b.js";const a='{"title":"정적 사이트로 배포하기","description":"","frontmatter":{"title":"정적 사이트로 배포하기"},"headers":[{"level":2,"title":"앱 빌드하기","slug":"building-the-app"},{"level":3,"title":"로컬에서 앱 테스트하기","slug":"testing-the-app-locally"},{"level":2,"title":"GitHub Pages 배포","slug":"github-pages"},{"level":3,"title":"Travis CI를 이용한 GitHub Pages 배포","slug":"github-pages-and-travis-ci"},{"level":2,"title":"GitHub Pages 그리고 GitLab CI","slug":"github-pages-and-gitlab-ci"},{"level":2,"title":"Netlify","slug":"netlify"},{"level":2,"title":"Google Firebase","slug":"google-firebase"},{"level":2,"title":"Surge","slug":"surge"},{"level":2,"title":"Heroku","slug":"heroku"},{"level":2,"title":"Vercel","slug":"vercel"},{"level":2,"title":"Azure Static Web Apps","slug":"azure-static-web-apps"}],"relativePath":"guide/static-deploy.md","lastUpdated":1624676819362}',s={},o=l("h1",{id:"deploying-a-static-site"},[l("a",{class:"header-anchor",href:"#deploying-a-static-site","aria-hidden":"true"},"#"),t("정적 사이트로 배포하기")],-1),u=l("p",null,"이 곳의 내용은 아래와 같이 설정하였다고 가정한 상태에서 진행합니다.",-1),r=l("ul",null,[l("li",null,[t("빌드 결과물이 저장되는 디렉터리를 기본 디렉터리("),l("code",null,"dist"),t(")로 지정한 상태입니다. 물론 "),l("a",{href:"/config/#build-outdir"},[l("code",null,"build.outDir"),t(" 설정 값을 이용해 바꿀 수는 있으나")]),t(", 여기서는 "),l("code",null,"dist"),t("를 빌드 디렉터리로 지정했다 가정하고 진행합니다.")]),l("li",null,"NPM 또는 NPM 스크립트를 실행할 수 있는 Yarn과 같은 패키지 매니저를 사용하고 있습니다."),l("li",null,"vite는 로컬 PC에 존재하는 프로젝트에 개발용(Dev) 디펜던시로 설치된 상태이며, 아래와 같이 NPM 스크립트를 설정한 상태입니다.")],-1),i=l("div",{class:"language-json"},[l("pre",null,[l("code",null,[l("span",{class:"token punctuation"},"{"),t("\n  "),l("span",{class:"token property"},'"scripts"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token punctuation"},"{"),t("\n    "),l("span",{class:"token property"},'"build"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token string"},'"vite build"'),l("span",{class:"token punctuation"},","),t("\n    "),l("span",{class:"token property"},'"preview"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token string"},'"vite preview"'),t("\n  "),l("span",{class:"token punctuation"},"}"),t("\n"),l("span",{class:"token punctuation"},"}"),t("\n")])])],-1),c=l("p",null,[t("한 가지 유의할 것은, "),l("code",null,"vite preview"),t(" 명령은 로컬에서 어떤 형태로 빌드가 되는지 미리 확인하기 위한 용도일 뿐이며, 실제 배포(Production) 서버를 의미하지는 않습니다.")],-1),p=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"NOTE"),l("p",null,[t("이 가이드는 Vite 기반의 사이트를 정적(Static)으로 배포하기 위한 방법을 설명하고 있습니다. 물론 Vite는 서버 측 렌더링(SSR, Server Side Rendering)을 지원하고 있으나, 현재는 실험적인 기능입니다. 참고로 '서버 측 렌더링'이란, Node.js를 이용해 동일한 웹 애플리케이션을 HTML로 사전에 렌더링한 뒤, 이를 클라이언트에게 제공하는 방식의 프런트엔드 프레임워크를 의미합니다. 이에 대해 더 알고자 한다면 "),l("a",{href:"./ssr.html"},"SSR 가이드"),t("를 참고해주세요. 만약 기존에 사용하고 있는 서버측 프레임워크(Ror, Laravel 등)가 있다면, "),l("a",{href:"./backend-integration.html"},"백엔드 통합 가이드"),t("를 참고해주세요.")])],-1),d=l("h2",{id:"building-the-app"},[l("a",{class:"header-anchor",href:"#building-the-app","aria-hidden":"true"},"#"),t("앱 빌드하기")],-1),k=l("p",null,[t("아래와 같이 "),l("code",null,"npm run build"),t(" 명령을 통해 앱을 빌드할 수 있습니다.")],-1),h=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[t("$ "),l("span",{class:"token function"},"npm"),t(" run build\n")])])],-1),g=l("p",null,[t("기본적으로 "),l("code",null,"dist"),t(" 디렉터리에 빌드 결과물이 저장되며, 배포 시 "),l("code",null,"dist"),t(" 디렉터리를 원하는 플랫폼에 맞춰 그대로 배포하면 됩니다.")],-1),b=l("h3",{id:"testing-the-app-locally"},[l("a",{class:"header-anchor",href:"#testing-the-app-locally","aria-hidden":"true"},"#"),t("로컬에서 앱 테스트하기")],-1),m=l("p",null,[t("한 번 빌드된 앱은 "),l("code",null,"npm run preview"),t(" 명령으로 로컬에서 테스트가 가능합니다.")],-1),f=l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[t("$ "),l("span",{class:"token function"},"npm"),t(" run build\n$ "),l("span",{class:"token function"},"npm"),t(" run preview\n")])])],-1),v=l("p",null,[l("code",null,"preview"),t(" 명령을 실행하게 되면 정적 웹 서버가 실행되며, 이 서버는 "),l("code",null,"dist"),t(" 내에 존재하는 파일을 "),l("a",{href:"http://localhost:5000",target:"_blank",rel:"noopener noreferrer"},"http://localhost:5000"),t(" 경로를 통해 배포합니다. 브라우저를 통해 사이트에 접속하여 실제 배포 시 어떻게 보여질 것인지 쉽게 파악할 수 있습니다.")],-1),y=l("p",null,[t("만약 특정 포트를 지정하고자 한다면 "),l("code",null,"--port"),t(" 옵션을 이용해주세요.")],-1),E=l("div",{class:"language-json"},[l("pre",null,[l("code",null,[l("span",{class:"token punctuation"},"{"),t("\n  "),l("span",{class:"token property"},'"scripts"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token punctuation"},"{"),t("\n    "),l("span",{class:"token property"},'"preview"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token string"},'"vite preview --port 8080"'),t("\n  "),l("span",{class:"token punctuation"},"}"),t("\n"),l("span",{class:"token punctuation"},"}"),t("\n")])])],-1),A=l("p",null,[t("이렇게 설정한 경우 "),l("a",{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},"http://localhost:8080"),t(" 을 기준으로 "),l("code",null,"preview"),t(" 명령이 실행됩니다.")],-1),R=l("h2",{id:"github-pages"},[l("a",{class:"header-anchor",href:"#github-pages","aria-hidden":"true"},"#"),t("GitHub Pages 배포")],-1),S=l("ol",null,[l("li",null,[l("p",null,[l("code",null,"vite.config.js"),t(" 파일 내 "),l("code",null,"base"),t(" 설정 값을 적절하게 설정합니다.")]),l("p",null,[t("만약 "),l("code",null,"https://<USERNAME>.github.io/"),t("와 같은 형태로 배포하고자 한다면, "),l("code",null,"base"),t(" 설정 값을 생략하거나 기본 값인 "),l("code",null,"'/'"),t(" 로 지정해주세요.")]),l("p",null,[t("만약 "),l("code",null,"https://<USERNAME>.github.io/<REPO>/"),t("와 같은 형태로 배포하고자 한다면, "),l("code",null,"base"),t(" 설정 값을 "),l("code",null,"'/<REPO>/'"),t("로 지정해주세요.")])]),l("li",null,[l("p",null,[t("프로젝트의 루트에 아래와 같은 내용이 들어간 "),l("code",null,"deploy.sh"),t(" 파일을 생성 및 실행해주세요(하이라이트 된 라인은 필요에 따라 주석 처리를 풀어주세요).")]),l("div",{class:"language-bash"},[l("div",{class:"highlight-lines"},[l("br"),l("br"),l("br"),l("br"),l("br"),l("br"),l("br"),l("br"),l("br"),l("br"),l("br"),l("br"),l("div",{class:"highlighted"}," "),l("br"),l("br"),l("br"),l("br"),l("br"),l("br"),l("div",{class:"highlighted"}," "),l("br"),l("br"),l("div",{class:"highlighted"}," "),l("br"),l("br"),l("br")]),l("pre",null,[l("code",null,[l("span",{class:"token shebang important"},"#!/usr/bin/env sh"),t("\n\n"),l("span",{class:"token comment"},"# 에러가 발생될 경우 스크립트 실행을 중지"),t("\n"),l("span",{class:"token builtin class-name"},"set"),t(" -e\n\n"),l("span",{class:"token comment"},"# 앱 빌드"),t("\n"),l("span",{class:"token function"},"npm"),t(" run build\n\n"),l("span",{class:"token comment"},"# 빌드된 파일이 존재하는 dist 디렉터리로 이동"),t("\n"),l("span",{class:"token builtin class-name"},"cd"),t(" dist\n\n"),l("span",{class:"token comment"},"# CNAME 파일을 이용해 커스텀 도메인을 지정할 수도 있습니다."),t("\n"),l("span",{class:"token comment"},"# echo 'www.example.com' > CNAME"),t("\n\n"),l("span",{class:"token function"},"git"),t(" init\n"),l("span",{class:"token function"},"git"),t(),l("span",{class:"token function"},"add"),t(" -A\n"),l("span",{class:"token function"},"git"),t(" commit -m "),l("span",{class:"token string"},"'deploy'"),t("\n\n"),l("span",{class:"token comment"},"# https://<USERNAME>.github.io 에 배포"),t("\n"),l("span",{class:"token comment"},"# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master"),t("\n\n"),l("span",{class:"token comment"},"# https://<USERNAME>.github.io/<REPO> 에 배포"),t("\n"),l("span",{class:"token comment"},"# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages"),t("\n\n"),l("span",{class:"token builtin class-name"},"cd"),t(" -\n")])])])])],-1),_=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,"물론 CI 툴을 이용해 위 스크립트 기반으로 배포가 자동으로 이루어지게끔 설정이 가능합니다.")],-1),G=l("h3",{id:"github-pages-and-travis-ci"},[l("a",{class:"header-anchor",href:"#github-pages-and-travis-ci","aria-hidden":"true"},"#"),t("Travis CI를 이용한 GitHub Pages 배포")],-1),P=l("ol",null,[l("li",null,[l("p",null,[l("code",null,"vite.config.js"),t(" 파일 내 "),l("code",null,"base"),t(" 설정 값을 적절하게 지정합니다.")]),l("p",null,[t("만약 "),l("code",null,"https://<USERNAME or GROUP>.github.io/"),t("와 같은 형태로 배포하고자 한다면, "),l("code",null,"base"),t(" 설정 값을 생략하거나 기본 값인 "),l("code",null,"'/'"),t("로 지정해주세요.")]),l("p",null,[t("만약 "),l("code",null,"https://<USERNAME or GROUP>.github.io/<REPO>/"),t("와 같은 형태로 배포하고자 한다면, "),l("code",null,"base"),t(" 설정 값을 "),l("code",null,"'/<REPO>/'"),t("로 지정해주세요.")])]),l("li",null,[l("p",null,[t("프로젝트의 루트에 "),l("code",null,".travis.yml"),t(" 파일을 생성해주세요(파일 내용은 아래 코드를 참고해주세요).")])]),l("li",null,[l("p",null,[l("code",null,"npm install"),t(" 명령을 실행한 뒤, "),l("code",null,"package-lock.json"),t(" 파일을 커밋해주세요.")])]),l("li",null,[l("p",null,[l("a",{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"},"Travis CI 문서"),t("를 참고해서 GitHub Pages 배포를 위한 설정을 진행해주세요. 예를 들어 아래와 같이 설정이 가능합니다.")]),l("div",{class:"language-yaml"},[l("pre",null,[l("code",null,[l("span",{class:"token key atrule"},"language"),l("span",{class:"token punctuation"},":"),t(" node_js\n"),l("span",{class:"token key atrule"},"node_js"),l("span",{class:"token punctuation"},":"),t("\n  "),l("span",{class:"token punctuation"},"-"),t(" lts/*\n"),l("span",{class:"token key atrule"},"install"),l("span",{class:"token punctuation"},":"),t("\n  "),l("span",{class:"token punctuation"},"-"),t(" npm ci\n"),l("span",{class:"token key atrule"},"script"),l("span",{class:"token punctuation"},":"),t("\n  "),l("span",{class:"token punctuation"},"-"),t(" npm run build\n"),l("span",{class:"token key atrule"},"deploy"),l("span",{class:"token punctuation"},":"),t("\n  "),l("span",{class:"token key atrule"},"provider"),l("span",{class:"token punctuation"},":"),t(" pages\n  "),l("span",{class:"token key atrule"},"skip_cleanup"),l("span",{class:"token punctuation"},":"),t(),l("span",{class:"token boolean important"},"true"),t("\n  "),l("span",{class:"token key atrule"},"local_dir"),l("span",{class:"token punctuation"},":"),t(" dist\n  "),l("span",{class:"token comment"},"# Travis가 리포지토리에 Push 할 수 있도록 GitHub에서 $GITHUB_TOKEN을 생성합니다."),t("\n  "),l("span",{class:"token comment"},"# 생성한 $GITHUB_TOKEN의 값은 Travis 설정 페이지에서 환경 변수로 지정해 사용할 수 있어요."),t("\n  "),l("span",{class:"token key atrule"},"github_token"),l("span",{class:"token punctuation"},":"),t(" $GITHUB_TOKEN\n  "),l("span",{class:"token key atrule"},"keep_history"),l("span",{class:"token punctuation"},":"),t(),l("span",{class:"token boolean important"},"true"),t("\n  "),l("span",{class:"token key atrule"},"on"),l("span",{class:"token punctuation"},":"),t("\n    "),l("span",{class:"token key atrule"},"branch"),l("span",{class:"token punctuation"},":"),t(" master\n")])])])])],-1),H=l("p",null,[l("code",null,"$GITHUB_TOKEN"),t("과 관련한 내용은 아래 문서를 참고해주세요.")],-1),w=l("ul",null,[l("li",null,[l("a",{href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token",target:"_blank",rel:"noopener noreferrer"},"개인 액세스 토큰 생성하기 (GitHub)")]),l("li",null,[l("a",{href:"https://docs.travis-ci.com/user/deployment/pages/#setting-the-github-token",target:"_blank",rel:"noopener noreferrer"},"GitHub Token 설정하기 (Travis)")])],-1),N=l("h2",{id:"github-pages-and-gitlab-ci"},[l("a",{class:"header-anchor",href:"#github-pages-and-gitlab-ci","aria-hidden":"true"},"#"),t("GitHub Pages 그리고 GitLab CI")],-1),U=l("ol",null,[l("li",null,[l("p",null,[l("code",null,"vite.config.js"),t(" 파일 내 "),l("code",null,"base"),t(" 설정 값을 적절하게 지정합니다.")]),l("p",null,[t("만약 "),l("code",null,"https://<USERNAME or GROUP>.gitlab.io/"),t("와 같은 형태로 배포하고자 한다면, "),l("code",null,"base"),t(" 설정 값을 생략하거나 기본 값인 "),l("code",null,"'/'"),t("로 지정해주세요.")]),l("p",null,[t("만약 "),l("code",null,"https://<USERNAME or GROUP>.gitlab.io/<REPO>/"),t("와 같은 형태로 배포하고자 한다면, "),l("code",null,"base"),t(" 설정 값을 "),l("code",null,"'/<REPO>/'"),t("로 지정해주세요.")])]),l("li",null,[l("p",null,[l("code",null,"vite.config.js"),t(" 파일의 "),l("code",null,"build.outDir"),t(" 값을 "),l("code",null,"public"),t("으로 설정해주세요.")])]),l("li",null,[l("p",null,[t("아래와 같은 내용으로 프로젝트의 루트에 "),l("code",null,".gitlab-ci.yml"),t(" 파일을 생성해주세요. 이와 같이 설정하게 되면, 콘텐츠가 변경될 때마다 사이트가 빌드 및 배포됩니다.")]),l("div",{class:"language-yaml"},[l("pre",null,[l("code",null,[l("span",{class:"token key atrule"},"image"),l("span",{class:"token punctuation"},":"),t(" node"),l("span",{class:"token punctuation"},":"),t("10.22.0\n"),l("span",{class:"token key atrule"},"pages"),l("span",{class:"token punctuation"},":"),t("\n  "),l("span",{class:"token key atrule"},"cache"),l("span",{class:"token punctuation"},":"),t("\n    "),l("span",{class:"token key atrule"},"paths"),l("span",{class:"token punctuation"},":"),t("\n      "),l("span",{class:"token punctuation"},"-"),t(" node_modules/\n  "),l("span",{class:"token key atrule"},"script"),l("span",{class:"token punctuation"},":"),t("\n    "),l("span",{class:"token punctuation"},"-"),t(" npm install\n    "),l("span",{class:"token punctuation"},"-"),t(" npm run build\n  "),l("span",{class:"token key atrule"},"artifacts"),l("span",{class:"token punctuation"},":"),t("\n    "),l("span",{class:"token key atrule"},"paths"),l("span",{class:"token punctuation"},":"),t("\n      "),l("span",{class:"token punctuation"},"-"),t(" public\n  "),l("span",{class:"token key atrule"},"only"),l("span",{class:"token punctuation"},":"),t("\n    "),l("span",{class:"token punctuation"},"-"),t(" master\n")])])])])],-1),O=l("h2",{id:"netlify"},[l("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),t("Netlify")],-1),j=l("ol",null,[l("li",null,[l("p",null,[l("a",{href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},"Netlify"),t("에서 아래와 같은 설정으로 GitHub 프로젝트를 생성해주세요.")]),l("ul",null,[l("li",null,[l("strong",null,"Build Command:"),t(),l("code",null,"vite build"),t(" 또는 "),l("code",null,"npm run build")]),l("li",null,[l("strong",null,"Publish directory:"),t(),l("code",null,"dist")])])]),l("li",null,[l("p",null,"Deploy 버튼을 눌러주세요.")])],-1),M=l("h2",{id:"google-firebase"},[l("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),t("Google Firebase")],-1),T=l("ol",null,[l("li",null,[l("p",null,[l("a",{href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},"firebase-tools"),t("가 설치되어 있는지 확인해주세요.")])]),l("li",null,[l("p",null,[t("아래와 같은 내용으로 프로젝트 루트에 "),l("code",null,"firebase.json"),t(" 및 "),l("code",null,".firebaserc"),t(" 파일을 생성해주세요.")]),l("p",null,[l("code",null,"firebase.json"),t(":")]),l("div",{class:"language-json"},[l("pre",null,[l("code",null,[l("span",{class:"token punctuation"},"{"),t("\n  "),l("span",{class:"token property"},'"hosting"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token punctuation"},"{"),t("\n    "),l("span",{class:"token property"},'"public"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token string"},'"dist"'),l("span",{class:"token punctuation"},","),t("\n    "),l("span",{class:"token property"},'"ignore"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token punctuation"},"["),l("span",{class:"token punctuation"},"]"),t("\n  "),l("span",{class:"token punctuation"},"}"),t("\n"),l("span",{class:"token punctuation"},"}"),t("\n")])])]),l("p",null,[l("code",null,".firebaserc"),t(":")]),l("div",{class:"language-js"},[l("pre",null,[l("code",null,[l("span",{class:"token punctuation"},"{"),t("\n "),l("span",{class:"token string"},'"projects"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token punctuation"},"{"),t("\n   "),l("span",{class:"token string"},'"default"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token string"},'"<YOUR_FIREBASE_ID>"'),t("\n "),l("span",{class:"token punctuation"},"}"),t("\n"),l("span",{class:"token punctuation"},"}"),t("\n")])])])]),l("li",null,[l("p",null,[l("code",null,"npm run build"),t(" 명령을 먼저 실행하고, 그 다음 "),l("code",null,"firebase deploy"),t(" 명령을 통해 배포가 가능합니다.")])])],-1),I=l("h2",{id:"surge"},[l("a",{class:"header-anchor",href:"#surge","aria-hidden":"true"},"#"),t("Surge")],-1),C=l("ol",null,[l("li",null,[l("p",null,[l("a",{href:"https://www.npmjs.com/package/surge",target:"_blank",rel:"noopener noreferrer"},"surge"),t("가 설치되지 않은 경우, 먼저 설치해주세요.")])]),l("li",null,[l("p",null,[l("code",null,"npm run build"),t(" 명령을 실행해주세요.")])]),l("li",null,[l("p",null,[l("code",null,"surge dist"),t(" 명령을 통해 Surge로 배포해주세요.")])])],-1),$=l("p",null,[t("물론, "),l("code",null,"surge dist yourdomain.com"),t("과 같은 명령을 이용해 "),l("a",{href:"http://surge.sh/help/adding-a-custom-domain",target:"_blank",rel:"noopener noreferrer"},"커스텀 도메인"),t("으로 배포할 수도 있습니다.")],-1),V=l("h2",{id:"heroku"},[l("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),t("Heroku")],-1),z=l("ol",null,[l("li",null,[l("p",null,[l("a",{href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},"Heroku CLI"),t("를 설치해주세요.")])]),l("li",null,[l("p",null,[l("a",{href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},"Heroku 가입 페이지"),t("에서 계정을 만들어주세요.")])]),l("li",null,[l("p",null,[l("code",null,"heroku login"),t(" 명령으로 Heroku에 로그인해주세요.")]),l("div",{class:"language-bash"},[l("pre",null,[l("code",null,"$ heroku login\n")])])]),l("li",null,[l("p",null,[t("아래와 같은 내용으로 "),l("code",null,"static.json"),t(" 파일을 프로젝트 루트에 생성해주세요.")]),l("p",null,[l("code",null,"static.json"),t(":")]),l("div",{class:"language-json"},[l("pre",null,[l("code",null,[l("span",{class:"token punctuation"},"{"),t("\n  "),l("span",{class:"token property"},'"root"'),l("span",{class:"token operator"},":"),t(),l("span",{class:"token string"},'"./dist"'),t("\n"),l("span",{class:"token punctuation"},"}"),t("\n")])])]),l("p",null,[t("이러한 방식으로 배포될 사이트에 대한 설정이 가능합니다. 더 많은 정보가 필요하다면 "),l("a",{href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},"heroku-buildpack-static"),t(" 리포지토리를 참고해주세요.")])]),l("li",null,[l("p",null,"Heroku Git remote를 설정해주세요."),l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[l("span",{class:"token comment"},"# 버전 갱신"),t("\n$ "),l("span",{class:"token function"},"git"),t(" init\n$ "),l("span",{class:"token function"},"git"),t(),l("span",{class:"token function"},"add"),t(),l("span",{class:"token builtin class-name"},"."),t("\n$ "),l("span",{class:"token function"},"git"),t(" commit -m "),l("span",{class:"token string"},'"My site ready for deployment."'),t("\n\n"),l("span",{class:"token comment"},"# 새로운 애플리케이션 생성"),t("\n$ heroku apps:create example\n\n"),l("span",{class:"token comment"},"# 정적 사이트 배포를 위해 Buildpack 정의"),t("\n$ heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git\n")])])])]),l("li",null,[l("p",null,"마지막으로, 아래 명령을 통해 사이트를 배포하게 됩니다."),l("div",{class:"language-bash"},[l("pre",null,[l("code",null,[l("span",{class:"token comment"},"# 사이트 배포"),t("\n$ "),l("span",{class:"token function"},"git"),t(" push heroku master\n\n"),l("span",{class:"token comment"},"# Heroku CI 대시보드 열기"),t("\n$ heroku "),l("span",{class:"token function"},"open"),t("\n")])])])])],-1),B=l("h2",{id:"vercel"},[l("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),t("Vercel")],-1),D=l("p",null,[l("a",{href:"https://vercel.com/docs/git",target:"_blank",rel:"noopener noreferrer"},"Git을 이용해 배포"),t("하기 위해, 먼저 Git 리포지토리에 프로젝트가 Push 되었는지 확인해주세요.")],-1),W=l("p",null,[t("Push가 되었다면, "),l("a",{href:"https://vercel.com/import/git",target:"_blank",rel:"noopener noreferrer"},"https://vercel.com/import/git"),t(" 에 접속해 Git 리모트 서버(GitHub, GitLab 또는 BitBucket)에서 Vercel로 프로젝트를 가져와주세요. 이후 Vercel 마법사를 따라 프로젝트의 "),l("code",null,"package.json"),t("이 있는 프로젝트의 루트를 선택하고, Build and Output Settings 내 BUILD COMMAND를 "),l("code",null,"npm run build"),t("로 지정해주세요. OUTPUT DIRECTORY에는 "),l("code",null,"./dist"),t("로 값을 지정해주세요(설정 값은 OVERRIDE 하도록 해주세요).")],-1),L=l("p",null,[l("img",{src:"/docs-next/assets/vercel-configuration.fed410b3.png",alt:"Override Vercel Configuration"})],-1),x=l("p",null,[t("성공적으로 프로젝트를 Vercel로 불러왔다면, 이후 모든 브랜치에 대한 Push 동작은 애플리케이션에 대해 미리보기("),l("code",null,"preview"),t(") 형태의 배포를, 그리고 배포 브랜치(일반적으로 "),l("code",null,"main"),t(")에 대한 변경 사항은 프로덕션("),l("code",null,"build"),t(") 형태의 배포를 진행하게 됩니다.")],-1),Y=l("p",null,[t("이렇게 배포가 완료되면 "),l("a",{href:"https://vite.vercel.app",target:"_blank",rel:"noopener noreferrer"},"https://vite.vercel.app"),t(" 과 같이 실시간으로 애플리케이션에 접속할 수 있는 URL이 제공됩니다.")],-1),K=l("h2",{id:"azure-static-web-apps"},[l("a",{class:"header-anchor",href:"#azure-static-web-apps","aria-hidden":"true"},"#"),t("Azure Static Web Apps")],-1),F=l("p",null,[t("You can quickly deploy your Vite app with Microsoft Azure "),l("a",{href:"https://aka.ms/staticwebapps",target:"_blank",rel:"noopener noreferrer"},"Static Web Apps"),t(" service. You need:")],-1),q=l("p",null,[t("마이크로소프트 Azure 클라우드 서비스의 "),l("a",{href:"https://aka.ms/staticwebapps",target:"_blank",rel:"noopener noreferrer"},"Static Web Apps"),t(" 서비스를 이용해 빠르게 Vite 앱을 배포할 수 있습니다.")],-1),J=l("ul",null,[l("li",null,[t("Azure 계정과 구독(Subscription) 키가 필요해요. "),l("a",{href:"https://azure.microsoft.com/free",target:"_blank",rel:"noopener noreferrer"},"여기서 무료로 Azure 계정을 만들 수 있답니다"),t(".")]),l("li",null,[t("Vite 앱을 "),l("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},"GitHub"),t("에 Push 해주세요.")]),l("li",null,[l("a",{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},"Visual Studio Code"),t("의 "),l("a",{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps",target:"_blank",rel:"noopener noreferrer"},"SWA(Static Web Apps) 확장 프로그램"),t("을 설치해주세요.")])],-1),Q=l("p",null,"VS Code에 확장 프로그램을 설치한 뒤 앱의 루트 디렉터리로 들어가주세요. 이후 설치한 SWA 확장 프로그램을 실행하고, Azure에 로그인 한 뒤, '+' 버튼을 눌러 새로운 정적 웹 앱(Static Web App)을 만들어주세요. 여기서 앞서 생성한 구독 키를 설정하라는 메시지가 나오게 됩니다.",-1),X=l("p",null,[t("확장 프로그램을 통해 시작된 마법사를 따라 앱 이름을 지정하고, 프레임워크에 대한 사전 설정을 선택한 뒤, 앱 루트(일반적으로 "),l("code",null,"/"),t(") 및 빌드된 파일 위치("),l("code",null,"/dist"),t(")를 지정해주세요. 마법사가 실행되며 "),l("code",null,".github"),t(" 폴더의 저장소에 GitHub Actions가 구성됩니다.")],-1),Z=l("p",null,"새로이 구성된 GitHub Action은 앱 배포 시 동작하며(GitHub의 Actions 탭에서 확인할 수 있어요), 성공적으로 완료되면 확장 프로그램의 진행률 창에서 제공되는 'Browse Website' 버튼으로 배포된 앱을 볼 수 있게 됩니다.",-1);s.render=function(l,t,a,s,nn,en){return n(),e("div",null,[o,u,r,i,c,p,d,k,h,g,b,m,f,v,y,E,A,R,S,_,G,P,H,w,N,U,O,j,M,T,I,C,$,V,z,B,D,W,L,x,Y,K,F,q,J,Q,X,Z])};export default s;export{a as __pageData};
