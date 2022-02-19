---
title: ES6 부터의 자바스크립트(추가된 기능들, 보완된 기능들) - 2
date: '2022-02-20'
tags: ['study', 'javascript']
draft: true
summary: 전개 연산자(Spread operator), 배열 비구조화(array destructuring), 객체 비구조화(object destructuring)
---

**(해당 내용은 실전 리액트 프로그래밍 책을 공부하면서 책 속에 있는 내용을 참조, 인용했습니다.)**

## 전개 연산자, 배열 비구조화, 객체 비구조화

### 1. 전개 연산자 (Spread operator)

전개 연산자는 배열이나 객체의 속성들을 풀어놓을때 사용한다.
즉, 배열이나 객체를 통째로 가져오는게 아니라 안에 있는 속성들만 가져올 수가 있게 된다.
매개 변수가 많은 함수를 호출해야 할 때나 동적으로 매개변수를 전달할 때 유용하다.

```js
Math.max(1, 3, 5, 7) // 1)

const numbers = [1, 3, 5, 7]
Math.max.apply(null, numbers) // 2)
Math.max(...numbers) // 3)
```

1번 방식으로는 동적으로 매개변수를 전달할 수 없다.
대안으로 2번 방식처럼 동적으로 전달할 수 있지만 이 방식은 가독성이 조금 떨어진다.
3번처럼 전개 연산자를 사용하면 간편하게 동적으로 매개변수를 전달할 수 있게 된다.

또한 배열이나 객체를 복사할 때도 유용하게 쓸 수 있다.

```js
const arr = [1, 2, 3]
const newArr = [...arr] // [1,2,3] 배열이 복사된다.
newArr.push(4) // [1,2,3,4]

const obj = { age: 4, name: 'enesbee' }
const newObj = { ...obj } // {age:4, name:'enesbee'} 객체가 복사된다.
newObj.age = 34 // { age: 34, name: 'enesbee' }
```

배열에서 전개 연산자를 사용하면 그 순서가 유지된다거나, 객체끼리 병합하기 쉬워진다.

```js
// 전개 연산자를 쓰면 순서가 유지된다.
;[1, ...[2, 3], 4] // [1,2,3,4]

const dateObj = [2022, 2, 20]
new Date(...dateObj) // Sun Mar 20  2022  00:00:00  GMT+0900 (대한민국 표준시)

//두 객체 병합
const info1 = { name: 'enesbee', age: 4 }
const info2 = { mbti: 'ISFP' }
const info3 = { hobby: 'watch youtube', age: 34 }
const infomation = { ...info1, ...info2, ...info3 }

console.log(infomation) // { name: 'enesbee', age: 34, mbti: 'ISFP', hobby: 'watch youtube' }
```

중간에 age라는 속성이 info1에서 한번, info3에서 한번, 총 두 번 들어가 있었다.
전개 연산자를 쓰게 되면 이처럼 객체 리터럴에서 중복된 속성명을 사용할 수 있게 된다.

### 2. 배열 비구조화(array destructuring)

배열 비구조화는 배열의 여러 속성값을 변수로 쉽게 할당할 수 있는 문법이다.

### 3. 객체 비구조화(object destructuring)

객체 비구조화는 객체의 여러 속성값을 변수로 쉽게 할당할 수 있는 문법이다.

| 참조                                                       |
| :--------------------------------------------------------- |
| 실전 리액트 프로그래밍 (이재승 저, 인사이트, 2019, 60-67p) |
