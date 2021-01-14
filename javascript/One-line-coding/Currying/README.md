# 커링(Currying)

커링은 함수와 함께 사용할 수 있는 고급기술인데, 다른 언어에서도 존재한다!

커링은 `f(a, b, c)`처럼 단일 호출로 처리하는 함수를 `f(a)(b)(c)`와 같이 각각의 인수가 호출 가능한 프로세스로 변환하는 것이다.

> **커링은 함수를 호출하지 않는다. 그저 변환할 뿐!**

<br />

### 커링은 어디에 사용될까?

모던 자바스크립트에서는 **로그 함수**를 예시로 보여준다. 예시를 보면 커링이라는 것은 생각보다 많은 곳에서 사용할 수 있을 것 같은 느낌이 든다.

```jsx
function log(date, importance, message) {
  console.log(`[${date.toLocaleString()}] [${importance}] ${message}`);
}

log = _.curry(log);

log(new Date(), "DEBUG", "some test");// [2021. 1. 14. 오후 4:04:29] [DEBUG] some debug
log(new Date())("DEBUG")("some test");// [2021. 1. 14. 오후 4:04:30] [DEBUG] some debug
```

여기서 신기한 문법이 보인다. `_.curry(log);` 라는 것이다. 이것은 무엇일까?

**Syntax:** `_.curry( fun, reverse )`

**Parameters:** This method takes two parameters as listed above and discussed below.

- **fun:** This is the given function.
- **reverse:** It is an optional parameter and determines whether the arguments will be reversed or not

**Return Value:** It returns a curried version of the function.

**Note:** To execute the below examples, you have to install the **underscore-contrib** library by using this command prompt and execute the following command.

**Install:** `npm install underscore-contrib`

<br />

### 다양한 예제를 만들어보자!

**1) 간단한 더하기 예제**

```jsx
const curry = (f) => a => b => f(a,b);
const sum = (a, b) => a + b;
const add = c(sum);

add(1)(4); // 5
```

사실, 더하기 함수를 위처럼 쓸 일은 없다. 편의를 위해서라면 더 많은 파라미터를 수용하는게 좋다.

```jsx
const sum = (...numbers) => [...numbers].reduce((acc, curr) => acc + curr);
sum(1,2,3,4,5,6);
```

나라면, 이렇게 사용할 것 같다.

<br />

**2) 변경한 로그 출력 함수**

```jsx
function log(importance, message) {
  console.log(`[${(new Date).toLocaleString()}] [${importance}] ${message}`);
}

const _debug = log("DEBUG");
const _info  = log("INFO");
const _warn  = log("WARN");
const _fatal = log("FATAL");
const _error = log("ERROR");

console.log(_debug('Testing Currying...'));
console.log(_info ('Testing Currying...'));
console.log(_warn ('Testing Currying...'));
console.log(_fatal ('Testing Currying...'));
console.log(_error ('Testing Currying...'));
/*
[2021. 1. 14. 오후 4:24:52] [DEBUG] Testing Currying...
[2021. 1. 14. 오후 4:24:52] [INFO] Testing Currying...
[2021. 1. 14. 오후 4:24:52] [WARN] Testing Currying...
[2021. 1. 14. 오후 4:24:52] [FATAL] Testing Currying...
[2021. 1. 14. 오후 4:24:52] [ERROR] Testing Currying...
*/
```

'node.js 처럼 서버에서 사용하면 좋지 않을까?' 생각이 잠시 들었지만, 더 좋은 라이브러리가 있겠지..

다양한 곳에서 사용할 것 같아서 `const`보다는 `function`으로 만들었다. const는 블록 범위니깐!

<br />

**3) URI 생성 함수**

실제 프로젝트를 만들 때, URI 부분은 전부 커링으로 리팩토링한 바 있다. 이렇게 쓰는게 맞는건지는 확실하지 않았지만, 관리하기 편해서 변경했었다.

```jsx
const genURI = prefixPath => resourcePath => `${prefixPath}${resourcePath}`;
const userURI = genURI('/user');
const systemURI = genURI('/system');

userURI('/1'); // /user/1
systemURI('/notice');
```

<br />