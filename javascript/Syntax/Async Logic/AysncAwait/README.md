# async ~ await

자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법이다.
기존의 비동기 처리 방식인 콜백함수와 프로미스의 단점을 보완하여 등장했다.

> **개발자가 읽기 좋은 코드를 작성하기 위해 async ~ await를 사용하자!**

<br />

### async ~ await 어떻게 사용할까?

비동기 처리방식을 사용하는 이유는 코드의 실행 순서를 보장받기 위해서다.
`async`/`await` 어떻게 사용하는지 살펴보자!

```jsx
**async** function randomCat() {
  const cat = **await** fetchRandomCat('https://aws.random.cat/meow');
  if (cat?.file) {
    console.log(cat.file); // https://purr.objects-us-east-1.dream.io/i/TNf3B.jpg
  }
}
```

위 예제는 무료 오픈 API인 Random Cat을 사용했다. 콜백함수 또는 프로미스를 사용했을 때보다 코드가 심플해지고 명확해진 것을 볼 수 있다.

사용법이 엄청 간단해졌다. `async`라는 **예약어**를 붙이고, 함수 내부 로직 중 HTTP 통신으로 **비동기 처리가 필요한 코드 앞**에 `await`라는 **키워드**를 붙이면 된다. 여기서, **주의할 점은 비동기 처리될 함수가 프로미스 객체를 무조건 반환해야 await 가 개발자가 의도한 대로 동작한다는 것**이다.

전체적인 코드를 살펴보자.

```jsx
function fetchRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => console.log(data));
}

async function randomCat() {
  const cat = await fetchRandomCat();
  if (cat?.file) {
    console.log(cat.file);
  }
}

randomCat(); // https://purr.objects-us-east-1.dream.io/i/dhxl2978.jpg
```

오픈 API를 사용하면 예제를 간단히 만들어볼 수 있다는 점에서 유용하다. 위 코드가 정상적으로 작동하는지 개발자도구(F12)에서 확인해보자.

<br />

### async ~ await 예외처리는?

API(HTTP COMM)는 외부 서버에 항상 의존적이다. 데이터를 요청하고자 하는 서버에 문제가 있거나 서비스를 종료했다면 어떻게 될까? 내 서비스도 같이 문제가 생기기 마련이다. 이를 위해 예외처리는 항상 중요하다. 예외처리는 기존과 동일하게 `try ~ catch`문으로 해결하면 된다.

```jsx
async function randomCat() {
  try {
	  const cat = await fetchRandomCat();
		const catImage = cat?.file;
		if (!catImage ) throw Error('No cat image!');

    const features = await fetchCatAnalysis(catImage);
		if (!features) throw Error('Featureless cat!');

    return {
			kind: feature.kind,
			age: feature.age,
			color: feature.color
		}
  } catch (error) {
    console.log(error);
  }
}
```

`fetchCatAnalysis()`는 허상으로 만들어낸 함수이므로 굳이 찾아보지 말자!