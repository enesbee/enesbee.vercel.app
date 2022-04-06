---
title: 2475, 2557, 2558
date: '2022-04-06'
tags: ['취미코테']
draft: false
summary: solved.ac를 통해 연습한 BOJ 문제. 2475번(검증수), 2557번(Hello World), 2558번(A+B - 2)
---

## 검증수 (2475번)

처음 제출한 답 (결과 : 틀렸습니다)

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const verifyNumber = input.reduce((a, b) => Number(a) + Number(b) ** 2)
console.log(verifyNumber % 10)
```

두번째 제출한 답 (결과 : 틀렸습니다)

```js
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .reduce((a, b) => Number(a) + Math.pow(Number(b), 2))
console.log(input % 10)
```

세번째 제출한 답 (결과 : 맞았습니다!!)

```js
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((i) => Math.pow(Number(i), 2))
  .reduce((a, b) => a + b)
console.log(input % 10)
```

_문제_

> 컴퓨터를 제조하는 회사인 KOI 전자에서는 제조하는 컴퓨터마다 6자리의 고유번호를 매긴다.  
> 고유번호의 처음 5자리에는 00000부터 99999까지의 수 중 하나가 주어지며 6번째 자리에는 검증수가 들어간다.  
> 검증수는 고유번호의 처음 5자리에 들어가는 5개의 숫자를 각각 제곱한 수의 합을 10으로 나눈 나머지이다.
>
> 예를 들어 고유번호의 처음 5자리의 숫자들이 04256이면, 각 숫자를 제곱한 수들의 합 0+16+4+25+36 = 81 을 10으로 나눈 나머지인 1이 검증수이다.

_입력_

> 첫째 줄에 고유번호의 처음 5자리의 숫자들이 빈칸을 사이에 두고 하나씩 주어진다.

_출력_

> 첫째 줄에 검증수를 출력한다.

_예제_

| 예제입력                                                                                                                                                                                                                                              | 예제출력 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 0<span style="background-color:rgba(250,218,94,0.3)"> </span>4<span style="background-color:rgba(250,218,94,0.3)"> </span>2<span style="background-color:rgba(250,218,94,0.3)"> </span>5<span style="background-color:rgba(250,218,94,0.3)"> </span>6 | 1        |

_썰_

혹시나 싶어 첫번째 틀렸던 답을 map과 reduce를 함께 써서 다시 제출해봤다.

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const verifyNumber = input.map((i) => Number(i) ** 2).reduce((a, b) => a + b)
console.log(verifyNumber % 10)
```

통과됐다.
\*\* 은 죄가 없었다.

굳이 reduce를 쓰지 않아도 되는 문제에 뭔가 써보고 싶어서 넣었는데.. 그 덕에 내가 기존에 쓰던 방식에 고쳐야할 부분이 있다는 것을 깨달았던 좋은 문제였다.

---

## Hello World (2557번)

```js
console.log('Hello World!')
```

_문제_

> Hello World!를 출력하시오.

_입력_

> 없음

_출력_

> Hello World!를 출력하시오.

_예제_

| 예제입력 | 예제출력                                                                |
| -------- | ----------------------------------------------------------------------- |
|          | Hello<span style="background-color:rgba(250,218,94,0.3)"> </span>World! |

_썰_

마땅히 쓸 말이 없는 문제였다.
여러 방법이 있겠지만 그 중 가장 간단한게 최고같음.

---

## A+B - 2 (2558번)

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(input[0] + input[1])
```

_문제_

> 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

_입력_

> 첫째 줄에 A, 둘째 줄에 B가 주어진다. (0 < A, B < 10)

_출력_

> 첫째 줄에 A+B를 출력한다.

_예제_
|예제입력|예제출력|
| -- | -- |
|1<br />2|3|

_썰_

(0 < A, B < 10) 라는 조건이 달려있긴 했는데, 이 값을 벗어나는 테스트케이스가 주어진다는 말도 없고 해서 그냥 덧셈했다.

그래도 변수명은 만들어서 해야겠다. (취미라지만 그래도 뭔가 알아볼 수 있는 한도 내에서 최대한 줄여야 할 것 같은 압박감이 있어서..)

---

[![Solved.ac
프로필](http://mazassumnida.wtf/api/v2/generate_badge?boj=enesbee)](https://solved.ac/enesbee)
![mazandi profile](http://mazandi.herokuapp.com/api?handle=enesbee&theme=dark)
<img src="http://mazandi.herokuapp.com/api?handle=enesbee&theme=dark"/>
