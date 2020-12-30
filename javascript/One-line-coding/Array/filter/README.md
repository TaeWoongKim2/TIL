## Array.prototype.filter()

`filter()` 메서드는 대상 배열 내의 모든 요소에 대해 주어진 테스터 함수를 실행하고, <u>**테스트를 통과하는 모든 요소를 모아 새로운 배열을 반환**</u>한다. 그 어떤 요소도 테스트를 통과하지 못한 경우 빈 배열을 반환한다.

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]
```

<br/>

#### ★ 매개변수

```javascript
arr.filter(callback(element[, index[, array]])[, thisArg])
```

1. **callback** - **테스터 함수**로 세 개의 인자를 가진다. `true`를 반환하면 요소를 유지하고 `false`면 버린다.
   - **element**  - 처리할 현재 요소.
   - *index* - 처리할 현재 요소의 인덱스.
   - *array* - `filter()`를 호출한 배열.

2. *thisArg* - `callback`을 실행할 때, `this`로 사용할 값.

<br/>

#### ★ 사용 예제

- (기본) JSON에서 무효한 항목 거를 때,

    ```javascript
    const arr = [
	{ id: 15 },
    	{ id: -1 },
        { id: 0 },
    { id: 3 },
        { id: 12.2 },
        {  },
        { id: null },
        { id: NaN },
        { id: 'undefined' }
    ];
    
    const isNumber = (obj) => obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
    
    const filterByID = (item) => isNumber(item.id) && item.id >= 0;
    
    const arrByID = arr.filter(filterByID);
    console.log(arrByID);
    /*
    [
        {id: 15},
        {id: 0},
        {id: 3},
        {id: 12.2}
    ] */
    ```




- 형태소 분석이 없는 간단 검색을 만들 때,

   ```javascript
   const users = [
       { name: 'KIM', age: 27, group: 'K' },
       { name: 'LEE', age: 28, group: 'L' },
       { name: 'CHOI', age: 25, group: 'C' },
       { name: 'LEEM', age: 23, group: 'L' },
       { name: 'KI', age: 29, group: 'K' }
   ];
   
   const data = users.filter(user => new RegExp('K', "gi").test(user.name));
   /*
   [
   	{name: "KIM", age: 27, group: "K"},
   	{name: "KI", age: 29, group: "K"}
   ] */
   ```
   




- 배열 A와 B의 교집합 만들 때,

   ```javascript
   const arrA = [1, 4, 3, 2];
   const arrB = [5, 2, 6, 7, 1];
   
   arrA.filter(it => arrB.includes(it)); // [1, 2]
   
   // 합집합은 디스트럭처링을 통해 쉽게 구현할 수 있다.
   [...new Set([...arrA, ...arrB])]; // [1, 4, 3, 2, 5, 6, 7]
   ```
   




- 관리자 관한을 갖고 있는지 확인할 때,

   이 경우는 `some()`을 이용하면, 더욱 가독성 좋은 코드를 짤 수 있다.
   
   ```javascript
   const hasFlagK = (users) => users.filter(user => user.group === 'K');
   console.log(hasFlagK(users)); // (2) [{...}, {...}], if(temp.length){...}
   
   const hasAdmin = (users) => users.some(user => user.group === 'admin');
   console.log(hasAdmin(users)); // false
   ```
   

<br/>

#### ★ **응용력 필수!**

> filter() 메서드도 활용도가 높기 때문에 어디에 또 사용할 수 있을지 생각해보자!

<br/>

#### ★ 출처!

- [Eleven Ways To Learn Javascript Array Iteration Effectively - ZeptoBook](https://www.zeptobook.com/eleven-ways-to-learn-javascript-array-iteration-effectively/)

