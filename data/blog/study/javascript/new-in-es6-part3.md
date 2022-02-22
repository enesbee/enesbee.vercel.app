---
title: ES6 부터의 자바스크립트(추가된 기능들, 보완된 기능들) - 3
date: '2022-02-20'
tags: ['study', 'javascript']
draft: true
summary: 프로미스(Promise)
---

**(해당 내용은 실전 리액트 프로그래밍 책을 공부하면서 책 속에 있는 내용을 참조, 인용했습니다.)**

## 프로미스

### 프로미스?

프로미스(Promise)는 비동기 상태를 값으로 다룰 수 있는 객체이다.
프로미스를 사용하면 비동기 프로그래밍을 마치 동기 프로그래밍 처럼 코딩할 수 있다.
이전에는 콜백 패턴을 많이 사용했었는데 콜백 패턴의 문제점으로는,

```js
function requestData1(callback) {
  // ...
  callback(data) // ①
}
function requestData2(callback) {
  // ...
  callback(data) // ②
}
function onSuccess1(data) {
  callback(data)
  requestData2(onSuccess2) // ③
}
function onSuccess2(data) {
  // ④
  callback(data)
  // ...
}
requestData1(onSuccess1) // ⑤
```

(그냥 봐도 코드 읽기가 난해하다.)
이 코드는 코드의 흐름을 따라가려면 우선 호출부터 ⑤ -> ① -> ③ -> ② -> ④ 순서로 실행된다. 짧은 코드임에도 어지럽다.
(원문에서는 진행방식에 따라 숫자를 매겨주셨지만, 여기선 정신없음을 표현하기 위해 코드 순서대로 번호를 매겼습니다.)

하지만 프로미스를 사용하면 코드가 순차적으로 실행되게 작성할 수 있다.

```js
requestData1()
  .then((data) => {
    console.log(data)
    return requestData2()
  })
  .then((data) => {
    console.log(data)
    // ...
  })
```

### 프로미스의 세 가지 상태

프로미스는 세 가지 상태 중 하나의 상태로 존재한다.

1. 대기 중(pending) : 결과를 기다리는 중
2. 처리됨(settled)
   2-1. 이행됨(fulfilled) : 수행이 정상적으로 끝났고 결과값을 갖고 있음.
   2-2. 거부됨(rejected) : 수행이 비정상적으로 끝났음.

### 프로미스를 생성하는 방법

```js
const p1 = new Promise((resolve, reject) => {
  // ...
  // resolve(data)
  // or reject('에러 메시지')
})
const p2 = Promise.resolve(param)
const p3 = Promise.reject('에러 메시지')
```

1. new 키워드를 사용해서 만드는 방법.
   이때는 프로미스는 대기중 상태로 생성이 된다.
   매개변수는 resolve, reject 라는 콜백함수를 갖는다.
   비동기로 어떤 작업을 수행해서 성공했을 때 resolve를, 실패했을 때는 reject를 호출하면 된다.

   각 호출에 따라 resolve를 호출했을 땐 상태가 이행됨(fulfilled)로, reject를 호출했을 땐 거부됨(rejected)로 된다.
   이 밖에도 함수 안에서 예외(exception)이 발생했을땐 거부됨 상태가 된다.

2. 바로 resolve, 또는 reject
   이렇게 하면 프로미스 생성시 각각 이행됨, 거부됨 상태로 생성할 수 있다.

### then

then은 처리됨(settled) 상태가 된 프로미스를 어떻게 할지 처리할 때 사용되는 메서드이다.

```js
	// 예시 1
    requestData().then(onResolve, onReject);
    Promise.resolve(123).then(data => console.log(data)); // 123
    Promise.reject('err').then(null, error => console.log(error); // 에러 발생

	// 예시 2
	requestData1()
	  .then(data => {
	    console.log(data);
	    return requestData2();
	    // ┕ onResolve 또는 onReject 함수에서 프로미스를 반환하면 then 메서드는 그 값 그대로 반환한다.
	  })
	  .then(data => {
		return data + 1; // 만일 프로미스가 아닌 값을 반환하면 then 메서드는 이행됨 상태로 프로미스 반환.
	  })
	  .then(data => {
		throw new Error('some error'); // 예외 발생시 거부됨 상태인 프로미스 반환
	  })
	  .then(null, error => {
		console.log(error);
	  })
```

### catch

catch는 프로미스 수행 중 발생한 예외를 처리하는 메서드이다.
then 메서드에서 onReject 함수와 같은 역할.

```js
// then을 썼을때,
Promise.reject(1).then(null, (error) => {
  console.log(error)
})

// catch를 썼을때,
Promise.reject(1).catch((error) => {
  console.log(error)
})
```

프로미스에서 예외 처리를 할때는 then 메서드의 onReject보다는 조금 더 직관적인 catch 메서드를 이용하는 것을 저자 분께서는 추천해주셨다.

```js
Promise.resolve()
  .then(() => {
    throw new Error('에러 발생!')
  })
  .catch((error) => {
    console.log(error)
  })
```

또한,

```js
Promise.reject(10)
  .then((data) => {
    console.log(`then1: ${data}`) // 처음에 reject 함수였으니 여긴 ㄴㄴ
    return 20
  })
  .catch((error) => {
    console.log(`catch: ${error}`) // catch: 10, (처음에 reject(10)이었으니, )
    return 30
  })
  .then((data) => {
    console.log(`then2: ${data}`) // then2: 30 (catch에서 리턴된 값)
  })
```

이렇게 catch 다음에 then이 올 수도 있다.

### finally

finally는 프로미스가 이행됨 또는 거부됨 상태일 때 호출되는 메서드이다.

```js
// 예시
requestData()
  .then((data) => {
    // ...
  })
  .catch((error) => {
    // ...
  })
  .finally(() => {
    // ...
  })
```

finally 메서드는 .then(onFinally, onFinally) 코드와 비슷하지만, 이전에 사용된 프로미스를 그대로 반환한다는 점이 다르다.
따라서 처리됨 상태인 프로미스의 데이터를 건드리지 않고 추가 작업을 할 때 유용하다.

````js
function requestData() {
  return fetch(
    ```
'http://example.com/api.json'
```
  )
    .catch((error) => {
      // ...
    })
    .finally(() => {
      sendLogToServer('requestData finished')
    })
}
requestData().then((data) => console.log(data))
````

## 프로미스 활용

### 병렬로 처리하기: Promise.all

then 메서드를 체인으로 연결하면 각각의 비동기 처리가 병렬로 처리되지는 않는데 이럴때 사용하는 함수이다.

비동기 함수 간에 서로 의존성이 없다면 체인으로 연결하지 않고 병렬로 처리하는 게 더 빠르다.

```js
requsetData1()
  .then((data) => {
    console.log(data)
    return requestData2()
  })
  .then((data) => {
    console.log(data)
  })

// 여기서 만약 requestData1, requestData2가 의존성이 없다고 가정하면,
requestData1().then((data) => console.log(data))
requestData2().then((data) => console.log(data))
// 이렇게 각각 병렬로 처리할 수 있는데 이런 경우 Promise.all을 쓸 수 있다.

Promise.all([requestData1(), requestData2()]).then(([responseData1, responseData2]) => {
  console.log(responseData1, responseData2)
})
```

이렇게 병렬로 처리할 수 있는건 좋은데 함정카드가 있다.
Promise.all 함수가 반환하는 프로미스는 병렬로 처리된 **모든 프로미스가 이행됨** 상태(혹은 프로미스가 주어지지 않았을 때)가 되어야 이행됨 상태가 된다.
만약 **하나라도 거부됨 상태**가 된다면 Promise.all 함수가 반환하는 프로미스는 **거부됨** 상태가 된다. 마치 &&..
상황에 맞춰서 쓰는게 중요할 것 같다.

### 가장 빨리 처리된 프로미스 가져오기: Promise.race

(프로미스로 race 해서 1등 뽑기?)
Promise.race는 여러 개의 프로미스 중 가장 빨리 처리된 프로미스를 반환하는 함수이다.
여러 프로미스중 하나라도 처리됨 상태가 되면 이 프로미스의 상태에 따라 이행됨 또는 거부됨 처리가 된다. 마치 ||....

### 프로미스를 이용한 데이터 캐싱

처리됨 상태가 되면 그 상태를 유지하는 프로미스의 성질을 이용해서 데이터 캐싱할 수 있다.

```js
let cachedPromise;

function getData() {
  cachedPromise = cachedPromise || requestData();
  return cachedPromise;
}
getData().then(value => console.log(value);
```

### 프로미스 사용 시 주의할 점

- return 까먹지 않기
- 프로미스는 불변 객체이다.
- 프로미스를 중첩해서 사용하지 않기 (콜백 패턴이랑 다를게 없어지는듯..)
- 동기 코드와 함께 사용할 때 예외처리에 신경쓰기.

| 참조                                               |
| :------------------------------------------------- |
| 실전 리액트 프로그래밍 (이재승 저, 인사이트, 2019) |
