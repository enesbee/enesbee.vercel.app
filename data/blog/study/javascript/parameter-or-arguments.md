---
title: 어떤게 parameter이고 어떤게 arguments 일까?
date: '2022-02-13'
tags: ['study', 'javascript']
draft: false
summary: 기억해둘만한 기초 내용들 내 식대로 정리 - parameter와 arguments의 차이
---

## Arguments

- 전달 인자
- 함수를 호출할 때 실제로 전달되는 값.
- 그러니깐 한마디로, 함수에 전달'하는' 값.

## Parameter

- 매개 변수
- 함수를 정의할 때에 사용되는 변수.
- 그러니깐 한마디로, 전달'받은' 값.

## 예시

```javascript
function sayHello(parameter) {
  // 여기서 받은건 매개변수 파라미터
  console.log(`Hello, ${parameter}!`)
}

sayHello('World') // 여기에는 인자 Arguments
```
