## Array

ES5부터 ES6를 지나 스크립트 프로그래밍 언어에 대한 표준화가 꾸준히 이뤄지면서 배열(Array)에 대한 Helper Method도 추가적으로 생겨났고, 강력한 녀석들이 등장하게 되었다. 그 녀석들을 사용하는 예제들을 정리해보자.

> **Array Helper Mehods**



### Properties

##### Length

Array 인스턴스는 자신의 길이(length)를  반환한다. 반환값은 부호 없는 32bit 정수형이며, 배열의 최대 인덱스보다 항상 크다는 것을 참고로 알아두자.

```javascript
var namelistA = new Array(4294967296); // 2의 32제곱 = 4294967296
var namelistB = new Array(-100)        // 음수

console.log(namelistA.length);         // RangeError: Invalid array length
console.log(namelistB.length);         // RangeError: Invalid array length

var namelistC = [];
namelistC.length = Math.pow(2,32)-1;   // 2의 32제곱 미만의 length 설정
console.log(namelistC.length);         // 4294967295
```

length를 이용하면 배열을 쉽게 단축시킬 수 있는데, 이 부분을 처음 봤을 때 "이게 된다고?" 싶었다 ㅎㅎ..

```javascript
var numbers = [1, 2, 3, 4, 5];

numbers.length = 3;
console.log(numbers, numbers.length); // [1, 2, 3], 3
```



### Methods

#### Array methods

Array 인스턴스 내에 존재하는 함수로 배열된 배열을 대상으로 사용하는 메서드이다.

1. `Array.isArray()` - 객체가 배열이라면 `true`, 아니라면 `false`.

   ```javascript
   Array.isArray(undefined);  // false
   Array.isArray(null);       // false
   Array.isArray('foobar');   // false
   Array.isArray({foo: 123}); // false
   Array.isArray([1, 2, 3]);  // true
   ```

   

2. `Array.from()` - 유사 배열 객체(array-like object)나 반복 가능 객체(iterable object)를 얕게 복사해 새로운 배열 객체를 만든다. **새로운 Array Instance를 반환한다는게 중요**하다.

   ```javascript
   Array.from('foo');                 // ["f", "o", "o"]
   Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
   // ※ map, reduce가 존재하는데, 굳이 사용할 일이 있을까 싶음...
   ```

   

3. `Array.of()` - 인자의 수나 유형에 관계 없이 가변 인자를 갖는 새 Array Instance를 만든다.

   ```javascript
   Array(7);            // [ , , , , , , ]
   Array(1, 2, 3);      // [1, 2, 3]
   
   Array.of(7);         // [7]
   Array.of(1, 2, 3);   // [1, 2, 3]
   Array.of(undefined); // [undefined]
   ```



#### Array prototype methods

`Array.prototype`를 콘솔에 찍어보면, 수많은 메서드들을 확인할 수 있다. 배열이라는 자료구조는 언제 어디서든 자주 사용되므로, 자주 사용되는 것들에 대해 꿀팁 예제들을 차곡차곡 정리할 필요가 있어 보인다.

```javascript
console.log(Array.prototype);
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
```

