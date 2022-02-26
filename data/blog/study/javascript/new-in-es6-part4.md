---
title: ES6 부터의 자바스크립트(추가된 기능들, 보완된 기능들) - 4
date: '2022-02-23'
tags: ['study', 'javascript']
draft: false
summary: async, await.
---

<details>
<summary><strong>ES6 부터의 자바스크립트 시리즈</strong></summary>
<div markdown="1">
  <ul>
    <li>
      <a href="/blog/study/javascript/new-in-es6-part1">const, let. 단축 속성명, 계산된 속성명</a>
    </li>
    <li>
      <a href="/blog/study/javascript/new-in-es6-part2">전개 연산자, 배열 비구조화, 객체 비구조화</a>
    </li>
    <li>
      <a href="/blog/study/javascript/new-in-es6-part3">프로미스(Promise)</a>
    </li>
    <li>
      <a href="/blog/study/javascript/new-in-es6-part4">async, await</a>
    </li>
  </ul>
</div>
</details>

---

## async, await 이해하기

### async와 await 함수는 프로미스를 반환한다.

프로미스는 객체로 존재하지만 async, await는 함수에 적용되는 개념이다.

```js
// 1) then 예시
async function getData() {
  return 1
}
getData().then((data) => console.log(data)) // 1

// 2) 예외 발생 시 catch 예시
async function getData() {
  throw new Error('1')
}
getData().catch((error) => console.log(error)) // 에러 발생 : 1

// 3) 명시적으로 프로미스를 반환하는 예
async function getData() {
  return Promise.resolve(1)
}
getData().then((data) => console.log(data)) // 1
```

function 앞에 `async`를 붙이면 해당 함수는 항상 프로미스를 반환한다. 꼭 프로미스가 아니더라도 이행 상태의 프로미스로 값을 감싸 이행된 프로미스가 반환되도록 한다.

세번째 예처럼 명시적으로 프로미스를 반환하는 것도 가능하다. 결과는 동일하게 그 객체를 그대로 반환.

### await 키워드를 사용하는 방법

await 키워드는 async, await 함수 내부에서 사용된다. await 에 프로미스를 사용하면 그 프로미스가 처리됨(settled) 상태가 될 때까지 기다린 후 결과가 반환된다.
await는 꼭 async와 함께 쓴다. function 앞에 async 가 없으면 Syntax error가 나게 된다.

```js
// await 키워드 사용 예시
function requestData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`완료! ${value}`)
      resolve(value)
    }, 1000)
  })
}

async function getData() {
  const data1 = await requestData(10)
  const data2 = await requestData(20)
  console.log(data1, data2)
  return [data1, data2]
}

getData()
// 완료! 10
// 완료! 20
// 10 20
```

requsetData 에서 10과 20을 모두 받아온다음 콘솔이 떴다.

## async와 await의 활용

### 비동기 함수를 병렬로 실행

await를 잘 활용한다면 비동기 함수를 병렬로 실행시킬 수 있다.

```js
// 우선 앞선 프로미스때 있었던 예시
requestData1()
  .then((data)  => {
    console.log(data)
    return  requestData2()
  })
  .then((data)  => {
    console.log(data)
  })

// requestData1, requestData2가 의존성이 없다고 가정했을 때,
// 1) 프로미스를 사용할 땐,
requestData1().then((data)  => console.log(data))
requestData2().then((data)  => console.log(data))

// 2) async를 사용하면,
async getData() {
  const data1 = await requestData1();
  const data2 = await requestData2();
  // ...
}
```

이렇게 순차적으로 처리할 수 있다.
여기에 프로미스의 "생성과 동시에 비동기 코드가 실행된다"는 특성을 활용해서,

```js
async function getData() {
  // 두개의 프로미스가 생성되고 각자의 비동기 코드가 실행됨.
  const p1 = requestData1()
  const p2 = requestData2()
  // 두 프로미스가 생성된 후 기다리기 때문에 두개의 비동기 함수가 병렬로 처리됨.
  const data1 = await p1
  const data2 = await p2
  // ...
}
```

두 개의 프로미스를 먼저 생성부터 하고 await 키워드를 나중에 사용하면 병렬로 실행되는 코드가 된다.

이 앞에서 비동기를 병렬로 사용하는 방법에는 Promise.all 이 있었다.
Promise.all을 사용한다면 위 내용을 더 간단히 할 수 있다.

```js
// Promise.all을 활용한 예
async function getData() {
  const [data1, data2] = await Promise.all([requestData1(), requestData2()])
}
```

### Thenable

promise.then 처럼 then 메서드가 있는 호출 가능한 객체를 `thenable`이라고 부른다.
그걸 지금 설명한 이유는, 바로 await에서도 thenable 객체를 사용할 수 있기 때문이다.
async, await는 프로미스가 아니더라도 then 메서드를 가진 객체를 프로미스처럼 취급한다.

```js
class ThenableExample {
  constructor(num) {
    this.num = num
  }
  then(resolve, reject) {
    setTimeout(() => resolve(this.num * 2), 1000)
  }
}

async function asyncFunc() {
  const result = await new ThenableExample(1)
  console.log(result) // 2
}

asyncFunc()
```

await는 .then이 구현되어 있으면서 프로미스가 아닌 객체를 받으면, resolve와 reject를 인수로 제공하는 메서드인 `.then`을 호출한다. 그리고 나서 await는 resolve나 reject 중 하나가 호출되길 기다렸다가 그 호출 결과를 가지고 다음을 진행한다.

### 에러 핸들링

await 를 쓸 때, 프로미스가 정상적으로 이행됨 상태가 되면 `await promise`는 프로미스 객체의 `result`에 저장된 값을 반환한다.
반면, 프로미스가 거부되면 마치 `throw`문을 작성한 것처럼 에러가 발생한다.

```js
async function rejectExample1() {
  await Promise.reject(new Error('에러 발생!'))
}

async function rejectExample2() {
  throw new Error('에러 발생!')
}
```

따라서 throw가 던진 에러를 잡을 때처럼 await가 던진 에러는 `try...catch`를 사용해 잡을 수 있다.

```js
async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const user = await response.json()
  } catch (error) {
    console.log(error)
  }
}

getData()
```

그리고 async await 함수를 쓰면 비동기 함수와 동기 함수에서 발생하는 모든 예외가 catch 문에서 처리 된다.

```js
async function getData() {
  try {
    await doAsync() // 비동기 함수라고 가정.
    return doSync() // 동기 함수라고 가정.
  } catch (error) {
    console.log(error)
  }
}

getData()
```

| 참조                                                         |
| :----------------------------------------------------------- |
| 실전 리액트 프로그래밍 (이재승 저, 인사이트, 2019)           |
| [모던 JavaScript 튜토리얼](https://ko.javascript.info/async) |
