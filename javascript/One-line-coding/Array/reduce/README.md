## Array.prototype.reduce()

`reduce()` 메서드는 대상 배열 내의 모든 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, <u>**결과값으로 새로운 배열을 반환**</u>한다.

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));	// 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));	// 15
```

<br/>

#### ★ 매개변수

```javascript
arr.reduce(callback[, initialValue])
```

1. **callback** - **리듀스 함수**로 네 개의 인자를 가진다. 
   - **accumulator** - 누산기로 콜백의 반환값을 누적한다.
   - **currentValue** - 처리할 현재 요소.
   - *currentIndex* - 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작.
   - *array* - `reduce()`를 호출한 배열.

2. *initialValue* - 최초 callback 호출에서 첫 번째 인수로 제공될 값. 초기값을 지정하지 않으면 배열의 첫 번째 요소부터 순회하며, <u>**빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생**</u>한다.

<br/>

#### ★ 사용 예제

- (기본) 배열의 모든 값을 합산할 때,

    ```javascript
   const score = [ 40, 90, 100, 70 ];
   const total = score.reduce(
      ( accumulator, currentValue ) => accumulator + currentValue, 0); 
   
   console.log(total); // 300
    ```


   <br/>

- 배열들을 하나의 배열로 펼칠 때,

   사실, 이 경우 concat 사용이 더 좋다. (예) `[].concat.apply([], nested);`

   ```javascript
   let arrays = [[1, 2, 3], [7, 8, 9], [4, 5, 6]];
   let flatArray = arrays.reduce((acc, cur) => [...acc, ...cur], []);
   
   console.log(flatArray); // [1, 2, 3, 7, 8, 9, 4, 5, 6]
   ```
   
   <br/>

- 특정 키의 빈도를 계산하는 객체를 만들 때,

   ```javascript
   
   const users = [
        { id: 100, name: 'KIM', age: 23, group: 'user' },
        { id: 101, name: 'LEE', age: 28, group: 'admin' },
        { id: 500, name: 'CHOI', age: 34, group: 'user' },
        { id: 999, name: 'KANG', age: 28, group: 'admin' }
   ];
   
   users.reduce((acc, cur) => ({ 
       ...acc, 
       [cur.age]: (acc[cur.age] || 0) + 1 
   }), {});
   // {23: 1, 28: 2, 34: 1}
   ```

   <br/>

- Object Key - Value 역전
   
   날씨 API에서 가지고 있는 도시 데이터를 위와 같이 줬지만, 나의 애플리케이션에서는 국가를 기준으로 데이터를 빠르게 가져오고 싶다는 가정을 해보자. 이를 위해 아래의 예제를 살펴보자.

   ```javascript
   const cities = {
       Seoul: 'Korea',
       Busan: 'Korea',
       Paris: 'France',
       Tokyo: 'Japan',
   };
   
   function getByCountry(cities) {
       return Object
           .keys(cities)
           .reduce((acc, cur) => {
             let country = cities[cur];
             acc[country] = [...(acc[country] || []), cur];
             return acc;
           }, {});
   }
   
   console.log(getByCountry(cities));
   /*
   France: ["Paris"]
   Japan: ["Tokyo"]
   Korea: ["Seoul", "Busan"] */
   ```

   위 예제는 Comma Operator로 간략하게 표현할 수 있는데 해당 개념도 공부해보자.
   
   ▶ `(acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc)`

   <br/>

- Array of object 인덱싱

   ```javascript
   // 위의 users
   const userTable = users.reduce((acc, cur) => ({ 
       ...acc,
       [cur.id]: cur,
   }), {});
   /*
   {
     100: { id: 100, name: 'KIM', age: 23, group: 'user' },
     101: { id: 101, name: 'LEE', age: 28, group: 'admin' },
     500: { id: 500, name: 'CHOI', age: 34, group: 'user' },
     999: { id: 999, name: 'KANG', age: 28, group: 'admin' }
   } */
   
   console.log(userTable[500]); // { id: 500, name: 'CHOI', age: 34, group: 'user' }
   console.log(userTable[101]); // { id: 101, name: 'LEE', age: 28, group: 'admin' }
   ```
   
   위 코드를 처음 봤을 때, *'이렇게도 사용할 수 있구나!'* 감탄했다. API 데이터를 가져와 가공해서 사용하거나 테이블 데이터를 인덱싱할 때 유용하게 사용할 수 있는 예시이다.
   
   <br/>

- 비동기 프로그래밍

   > 응용은 무한하다.

   `reduce()`는 비동기 프로그래밍에서도 유용하게 사용할 수 있다. 예제를 살펴보자.

   ```javascript
   const promiseFactory = (time) => {
      return new Promise((resolve, reject) => {
         console.log(time); 
         setTimeout(resolve, time);
      });
   };

   [1000, 2000, 3000, 4000].reduce((acc, cur) => {
      return acc.then(() => promiseFactory(cur));
   }, Promise.resolve());
   // 1000
   // 2000 (1초)
   // 3000 (2초)
   // 4000 (3초)
   ```

   순차적인 비동기적 액션이 요구될 경우, 위와 같이 프로미스와 결합하여 순차적 실행을 보장받을 수 있다. 코드를 분석해보면, 초기값을 `Promise.resolve()` 지정하고 `return` 된 프로미스에 `then()`을 붙여 다음 누적값으로 넘길 수 있음을 알 수 있다.
   

- 비동기 프로그래밍

   > 응용은 무한하다.

   `reduce()`는 `filter() + map()` 결합된 형태에 대해 성능을 더욱 높일 수 있다. 하지만, 리팩토링할 경우 가동성이 더 좋을수도? 나쁠수도? 성능에 큰 이슈가 없을 경우 가독성이 더 좋은 코드가 좋을 것 같다.

   ```javascript
   const evenFilter =
      (arr) => arr.filter(num => num % 2 === 0).map(num => num * 10);

    const evenReducer = (arr = []) => {
      return arr.reduce((acc, num) => {
        if(num % 2 === 0) acc.push(num * 10);
        return acc;
      }, []);
    }
   ```
   
   위의 예제의 경우, `reduce`는 대상 배열을 1회 순회하지만, `filter + map`의 경우 2회 순회한다. **filter된 데이터가 많으면 많을수록 성능이 떨어진다**. 테스트 결과도 1000,000번 런타임이 3배 넘게 차이가 난 경우도 존재했다. 성능이 필수조건인 경우 reduce를 적극 활용해야 한다.


<br/>

#### ★ **응용력 필수!**

> reduce() 메서드는 활용도가 높기 때문에 많이 예제 코드들을 경험해보자!

`reduce()` 메서드는 엄청 파워풀한 녀석이다. 모든 함수형 메서드는 `reduce()`로 구현할 수 있다는 점과 `map() ` 메서드보다 속도가 빠르다고 하는데, 이에 대한 비교 자료는 찾아볼 필요가 있다.


<br/>

#### ★ 출처

- [Eleven Ways To Learn Javascript Array Iteration Effectively - ZeptoBook](https://www.zeptobook.com/eleven-ways-to-learn-javascript-array-iteration-effectively/)

- [reduce를 쓰면서 유용했던 것 몇가지 정리 — Steemit](https://steemit.com/javascript/@rouka/reduce)