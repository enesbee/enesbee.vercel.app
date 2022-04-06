---
title: 1550, 2338
date: '2022-04-05'
tags: ['취미코테']
draft: false
summary: solved.ac를 통해 연습한 BOJ 문제. 1550번(16진수), 2338번(긴자리 계산)
---

## 16진수 (1550번)

```js
var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var a = input[0]
console.log(parseInt(a, 16))
```

_문제_

> 16진수 수를 입력받아서 10진수로 출력하는 프로그램을 작성하시오.

_입력_

> 첫째 줄에 16진수 수가 주어진다. 이 수의 최대 길이는 6글자이다. 16진수 수는 0~9와 A~F로 이루어져 있고, A~F는 10~15를 뜻한다. 또, 이 수는 음이 아닌 정수이다.

_출력_

> 첫째 줄에 입력으로 주어진 16진수 수를 10진수로 변환해 출력한다.

_썰_

아휴.. 착각해서 한번 틀렸다..  
16진수를 10진수로 변환하는데 `parseInt(a, 10)`을 해버렸다.

이럴땐 `parseInt(a, 16)`.  
~~로 parseInt '해줘'가 아니라, ~~를 parse**Int** '해줘'  
기억하고 실수하지 말아야겠다.

---

## 긴자리 계산 (2338번)

```js
const line = require('fs').readFileSync('/dev/stdin', 'utf8')
let input = line.trim().split('\n')

const a = BigInt(input[0])
const b = BigInt(input[1])
const result = `${a + b}\n${a - b}\n${a * b}`
console.log(result)
```

_문제_

> 두 수 A, B를 입력받아, A+B, A-B, A×B를 구하는 프로그램을 작성하시오.

_입력_

> 첫째 줄에 A가, 둘째 줄에 B가 주어진다. 각각의 수는 10진수로 1,000자리를 넘지 않으며 양수와 음수가 모두 주어질 수 있다.

_출력_

> 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A×B를 출력한다. 각각을 출력할 때, 답이 0인 경우를 제외하고는 0으로 시작하게 해서는 안 된다(1을 01로 출력하면 안 된다는 의미).

_썰_

아.. 에러만 11번 났다..  
답은 간단한데 왜 문제가 '맞았습니다!!'가 안뜨지? 하면서 제출만 계속 했었다.  
원인은 어제 기본틀이라고 썼던 코드에 있었다.
기존코드

```js
var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split('\n')
// ...
```

수정된 코드

```js
var fs = require('fs')
var input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')
// ...
```

제출은 상기 코드로 했지만 기존코드와 비슷하게 수정했다.(이것도 된다.)  
https://www.acmicpc.net/board/view/44689 페이지의 도움을 받아 해결.

차이점은 toString() 과 trim()
단순히 문자열 변환이 아니라 공백을 제거해주는..
한마디로 /dev/stdin 파일, 그러니깐 BOJ 플랫폼에 대한 이해도 부족이 가장 큰 원인이었던 것 같다.

입력 예제가 한줄일때는 상관없었지만 이번 문제는 두줄에 걸쳐 값을 전달받는 상황이라 문제가 생겼던 것 같다.

앞으로는 이런 것도 잘 봐야겠다.

---
