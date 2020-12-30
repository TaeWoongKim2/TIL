## Array.prototype.**reduce**()

``reduce()` 메서드는 대상 배열 내의 모든 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, <u>**결과값으로 새로운 배열을 반환**</u>한다.

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




- 배열들을 하나의 배열로 펼칠 때,

   사실, 이 경우 concat 사용이 더 좋다. (예) `[].concat.apply([], nested);`

   ```javascript
   let arrays = [[1, 2, 3], [7, 8, 9], [4, 5, 6]];
   let flatArray = arrays.reduce((acc, cur) => [...acc, ...cur], []);
   
   console.log(flatArray); // [1, 2, 3, 7, 8, 9, 4, 5, 6]
   ```
   


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

   `(acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc)`

   `reduce()`는 객체를 다룰 때, 유용하게 사용되는 것 같다. 


- array of object 인덱싱

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

#### ★ **응용력 필수!**

> reduce() 메서드는 활용도가 높기 때문에 많이 예제 코드들을 경험해보자!

`reduce()` 메서드는 엄청 파워풀한 녀석이다. 모든 함수형 메서드는 `reduce()`로 구현할 수 있다는 점과 `map() ` 메서드보다 속도가 빠르다고 하는데, 이에 대한 비교 자료는 찾아볼 필요가 있다.
