## for ... statement

ES6를 공부하면서 **`for ...in` vs `for ...of`** 차이점을 공부했고 참고 자료를 정리해본다.

<br/>

#### for ...in 반복문

`for in` 반복문은 객체의 속성들을 순회할 수 있다. `for in` 구문은 객체 내부 속성 중 `[[Enumerable]]`의 값이 `true`로 셋팅된 속성들만 반복할 수 있다는 점을 알아두자.

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
    console.log(prop, obj[prop]); // a 1, b 2, c 3
}

```

<br/>

#### for ...of 반복문

`for of` 반복문은 ES6에 새롭게 추가된 컬렉션 전용 반복 구문이다.`for of`를 사용하기 위해선 컬렉션 객체가  `[Symbol.iterator]` 속성을 가지고 있어야 한다(직접 명시 가능).

```javascript
const iterable = [10, 20, 30];

for (const it of iterable) {
  	console.log(it); // 10, 20, 30
}

for (const it of obj.keys()) {
	console.log(it); 
  	// 	VM291:1 Uncaught TypeError: 
	//	obj.keys is not a function or its return value is not iterable.
}
```

<br/>

#### "for ...in" vs "for ...of "

- `for in`: 객체의 열거 가능한 속성( `[[Enumerable]]: true`)에 대한 반복문.
- `for of`: `[Symbol.iterator]` 속성을 가지는 컬렉션 전용 반복문.

```javascript
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

var iterable = [3, 5, 7];
iterable.foo = "hello";

for (var key in iterable) {
  console.log(key); // 0, 1, 2, "foo", "_super", "arrCustom", "objCustom"
}

for (var value of iterable) {
  console.log(value); // 3, 5, 7
}
```

위 예제를 보면 for ...in 구문은 상당히 위험한 것으로 보인다. `[[Enumerable]]: true`를 전부 순회하기 때문에 오히려 복잡한 문제를 야기할 수 있다.  hasOwnProperty로 원하는 값인지 체크도 해야하고 이로 인해 성능 이슈가 생길 수 있다.

<br/>

[Web Tools Weekly (mailchi.mp)](https://mailchi.mp/webtoolsweekly/web-tools-230?e=b2c0f00eca) 해당 자료에서도 for ...in 사용 시 주의가 필요하다고 하며, ES6를 쓴다면 for ...in을 사용을 지양할 필요가 있다. 성능면에서도 이점이 없다는 것도 기억하자.

<br/>

> 차라리 리듀스를 쓰면 어떨까?

