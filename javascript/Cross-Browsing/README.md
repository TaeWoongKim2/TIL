## 크로스 브라우징(Cross Browsing)

IE, 크롬, 파이어폭스, 사파리 등등 어떤 브라우저에서든지 대상 웹페이지의 뷰가 동일하게 보이는 것을 말한다. IE와 같은 구형 브라우저에서는 최신 JS나 CSS 문법을 지원하지 않기 때문에 개발자들은 크로스 브라우징을 지원하기 위해 해줘야 하는게 있다. 바로 "폴리필(polyfill)" 작업이다.

<br/>

### 폴리필(Polyfill)

폴리필이라는 단어는 ''충전 솜''을 의미한다. 솜이 꺼졌을 때 충전 솜으로 그 부분을 채워 메꾸는 역할을 한다. 마찬가지로 최신 문법을 지원하지 않는 브라우져에 대해 사용 가능한 코드 조각이나 플러그인을 의미한다.

<br/>

### HTML5 Cross Browser Polyfills
Modernizr 측에서 제공하고 있는 각종 폴리필 목록을 참고해보자.

- html5shiv: HTML5의 섹셔닝(예: ``<header>``, ``<nav>``)을 지원하지 않는 브라우저를 위한 라이브러리
- mediaelement.js: HTML5의 ``<video>``와 ``<audio>`` 요소들을 모든 브라우저에서 하나의 파일로 같은 UI를 제공하기 위한 라이브러리
- Placeholder: HTML5의 ``placeholder``의 지원을 통일하기 위해서 제공하는 라이브러리
- h5Validate: HTML5의 ``<form>`` 검증 기능을 구현하기 위해 제공하는 라이브러리
- selectivizr: CSS3의 ``의사 클래스(pseudo-class)``와 속성 선택자들을 IE6~8에서 지원하기 위한 라이브러리
- css3pie: CSS3의 ``border-radius``와 ``box-shadow``, ``liner-gradient``를 IE6~9 브라우저에서 지원하기 위한 라이브러리
- Respond: 반응형 웹의 필수 속성중에 하나인 ``미디어쿼리``를 IE6~8에서 지원하기 위한 라이브러리

Mozilla 측의 폴리필을 손쉽게 사용하도록 방안도 서술했는데 보다 쉬운 폴리필 방법이라고 하니 참고해보자!
[Polyfill을 사용하는 보다 쉬운 방법 ★ Mozilla 웹 기술 블로그](http://hacks.mozilla.or.kr/2014/12/an-easier-way-of-using-polyfills/)

<br/>

### 리액트에서의 폴리필

리액트에서는 비교적 쉽게 해결이 가능하다. Facebook이라는 거대 회사가 지원하기 때문이다. 페이스북에서는 react-app-polyfill을 설치하는 것을 권장한다. 이것에 작동 원리는 더 알아보고 정리해려고 한다. 리액트 어플리케이션의 root directory의 ``index.jsx`` 첫 줄에 다래와 같이 넣어주면 해결된다.


![image.png](https://images.velog.io/post-images/dooreplay/40ea4cb0-0e79-11ea-867a-d57598fdeb4b/image.png){: width="75%"}


<br/>

> **출처**

1. [폴리필과 크로스 브라우징이란 무엇인가? - 둘둘`s dooreplay! (gollumnima.github.io)](https://gollumnima.github.io/posts/cross_brosing)

2. [polyfill(폴리필) 이란? (velog.io)](https://velog.io/@katanazero86/polyfill폴리필-이란)

3. [WEBDIR :: 폴리필(polyfill) (tistory.com)](https://webdir.tistory.com/328)
