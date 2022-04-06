---
title: BOJ 테스트 베이스
date: '2022-04-04'
tags: ['취미코테']
draft: true
summary: [draft]BOJ 테스트 베이스
---

// 1. 하나의 값을 입력받을 때

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim()
```

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
```

// 3. 여러 줄의 값들을 입력받을 때

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
```

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때

```js
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
```

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때

```js
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/)
```

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/)
const n = input[0]
const n_arr = input.slice(1, n + 1)
const [m, ...m_arr] = input.slice(n + 1)
```

// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(v => +v)를 추가

## 1. toString()을 붙이는 이유?

require("fs").readFileSync("/dev/stdin")의 반환값은 문자열이 아닌 Buffer 객체다. readFileSync의 인수로 인코딩을 지정해주지 않으면 Buffer 객체를 반환한다.

따라서 문자열로 바꾸어주지 않으면 예기치 못한 오류가 날 수 있다. 문자열로 바꾸기 위해서는 위의 코드처럼 toString() 메서드 또는 문자열 연결 연산을 통해 Buffer 객체를 문자열로 바꾸거나, readFileSync의 두 번째 인수로 인코딩을 지정해주면 된다.

```js
const input = require('fs').readFileSync('/dev/stdin')
console.log(typeof input) // object

const input2 = require('fs').readFileSync('/dev/stdin').toString()
console.log(typeof input2) // string

const input3 = require('fs').readFileSync('/dev/stdin') + ''
console.log(typeof input3) // string

const input4 = require('fs').readFileSync('/dev/stdin', 'utf8')
console.log(typeof input4) // string
```

## 2. trim()을 쓰는 이유?

일부 입력값의 마지막에 개행문자가 포함된 경우가 종종 있다. 이런 경우 split("\n")할 경우 공백문자 하나를 더 갖는 배열을 반환한다. 이를 방지하기 위해서 trim()을 사용한다.

```js
const text = '가\n나\n다\n'
console.log(text.split('\n')) // ['가', '나', '다', '']
console.log(text.trim().split('\n')) // ['가', '나', '다']
```

## 3. 5,6번 속도가 느리다.

split('/\s/')는 속도가 느리다. 처음 자바스크립트로 백준 문제를 푸시는 분들의 편의를 위해 위와 같이 작성하였다. 입력값이 엄청 크거나, 수행 시간을 단축하고 싶다면 split('/\s/')를 사용하지 말고 split('\n')로 한 줄 씩 나눈 뒤, 한 줄을 다시 한 번 더 나누는 방식으로 입력을 받아야 한다.

[출처](https://tesseractjh.tistory.com/39)(https://tesseractjh.tistory.com/39)
