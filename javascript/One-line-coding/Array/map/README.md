## Array.prototype.map()

`map()` 메서드는 대상 배열 내의 모든 요소들 각각에 대해 주어진 액션(함수)을 실행하고,

그 결과를 모아 **새로운 배열을 반환**한다.

```javascript
const arr = [1, 2, 3];

const newArr = arr.map(x => x ** 2);
console.log(newArr); // [1, 4, 9]
```

<br/>

#### ★ 매개변수

```javascript
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

1. **currentValue** - 처리할 현재 요소.
2. **index** - 처리할 현재 요소의 인덱스.
3. **array** - `map()`을 호출한 배열.
4. **thisArg** - `callback`을 실행할 때, `this`로 사용되는 값.

<br/>

#### ★ 사용 예제

- 온도에 대해 섭씨 ↔ 화씨로 바꾸기 등, Array item 값을 변경할 때,

    ```javascript
    const celsius = [-15, -5, 0, 10, 16, 20, 24, 32]

    const fahrenheit = celsius.map(c => c * 1.8 + 32);
    // [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]

    const temperture = fahrenheit.map(f => Math.round((f - 32) / 1.8));
    // [-15, -5, 0, 10, 16, 20, 24, 32]
    ```




- 배열 안의 각각의 item에서 특정 키로 유일한 값들을 뽑아낼 때,

   ```javascript
   const users = [
       { name: 'KIM', age: 27, group: 'K' },
       { name: 'LEE', age: 28, group: 'L' },
       { name: 'CHOI', age: 25, group: 'C' },
       { name: 'LEEM', age: 23, group: 'L' },
       { name: 'KI', age: 29, group: 'K' }
   ];
   
   let listOfUserGroups = [...new Set(users.map(user => user.group))];
   console.log(listOfUserGroups);	// ["K", "L", "C"]
   ```
   
   
   
- 객체를 URL 쿼리 스트링으로 인코딩할 때,

   ```javascript
   function getURIQuery(paramObject) {
       return Object.entries(paramObject)
           .map(p => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`)
           .join('&');
   }
   
   const uri = getURIQuery(params);
   console.log(uri);	// "page=1&row=20&language=kr"
   ```

   

- 배열을 순회할 때, (기본)

   ```javascript
   function readUsers(users) {
   	return users
           .map(({id, name, age, group}) => `\n${id} ${name} ${age} ${group}`)
           .join('');
   }
   
   const users = [
     { id: 11, name: 'KIM', age: 23, group: 'user' },
     { id: 47, name: 'LEE', age: 28, group: 'admin' },
     { id: 85, name: 'CHOI', age: 34, group: 'user' },
     { id: 97, name: 'KANG', age: 28, group: 'admin' }
   ];
   
   console.log(readUsers(users));
   /*
   11 KIM 23 user
   47 LEE 28 admin
   85 CHOI 34 user
   97 KANG 28 admin"*/
   ```

<br/>

#### ★ **map() → reduce()**

`reduce()` 메서드는 파워풀한 녀석임을 알게 됐다. 함수형 메서드 모도 reduce로 구현할 수 있다는 점이다. `reduce()`로 구현해보자.

```javascript
// (4)배열순회
function reduceUser(users = []) {
    return users
        .reduce((acc, { id, name, age, group }) => {
            acc.push(`\n${id} ${name} ${age} ${group}`);
            return acc;
        }, [])
        .join('');
}
```

조금 지저분해지긴 했지만, map()을 reduce()로 구현할 수 있음을 알아두자. 배열을 순회한다는 기능이므로 map()을 사용하는 것이 가독성 면에서 훨씬 깔끔하다.

> 즉, 코드 가독성을 위해 용도에 따라 깔끔하게 명시해주도록 하자!

