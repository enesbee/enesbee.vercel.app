---
title: 1000, 1001, 1271
date: '2022-04-04'
tags: ['취미코테']
draft: false
summary: solved.ac를 통해 연습한 BOJ 문제. 1000번(A+B), 1001번(A-B), 1271번(엄청난 부자2)
---

## 앞서..

solved.ac라는 사이트를 통해 백준 문제를 풀어봤다.  
난 자바스크립트를 공부하고 있으니, 문제 풀 때 node.js로 선택하고 진행하기로 했다.  
이렇다할 취미가 없어서 취미로 풀어본거라 굉장히 쉬운 난이도부터 선택하기로 했다.  
아, 제출한 답안의 퀄리티마저도 보장할 수 없다.

```js
var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var a = input[0]
var b = input[1]
```

위 코드를 기본 틀로 잡고 진행했다.

## A+B (1000번)

```js
var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var a = parseInt(input[0])
var b = parseInt(input[1])
console.log(a + b)
```

기록할만한 내용이 없다. 그냥 덧셈.

## A-B (1001번)

```js
var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var a = parseInt(input[0])
var b = parseInt(input[1])
console.log(a - b)
```

역시 기록할만한 내용이 없다. 1000번은 덧셈이지만 이건 뺄셈.

## 엄청난 부자2 (1271번)

```js
var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var a = BigInt(input[0])
var b = BigInt(input[1])
console.log((a / b).toString())
console.log((a % b).toString())
```

**tl;dr**

1. 10<sup>1000</sup>은 BigInt. 단순히 parseInt 하는게 아니라 BigInt로 되어야 한다.
2. BigInt의 타입은 Number나 Int같은게 아니다. BigInt이다.

이건 약간의 기록을 작성해야겠다.  
_문제_

> 갑부 최백준 조교는 동전을 최소로 바꾸는데 성공했으나 김재홍 조교가 그 돈을 발견해서 최백준 조교에게 그 돈을 나누자고 따진다.  
> 그 사실이 전 우주로 알려지자 우주에 있던 많은 생명체들이 자신들에게 돈을 분배해 달라고 당장 달려오기 시작했다.  
> 프로토스 중앙 우주 정부의 정책인, ‘모든 지적 생명체는 동등하다’라는 규칙에 입각해서 돈을 똑같이 분배하고자 한다.
>
> 한 생명체에게 얼마씩 돈을 줄 수 있는가?
>
> 또, 생명체들에게 동일하게 분배한 후 남는 돈은 얼마인가?

_입력_

> 첫째 줄에는 최백준 조교가 가진 돈 n과 돈을 받으러 온 생명체의 수 m이 주어진다.  
> (1 ≤ m ≤ n ≤ 10<sup>1000</sup>, m과 n은 10진수 정수)

_출력_

> 첫째 줄에 생명체 하나에게 돌아가는 돈의 양을 출력한다. 그리고 두 번째 줄에는 1원씩 분배할 수 없는 남는 돈을 출력한다.

처음에 이게 무슨 말인가 싶었다.  
그러다 예제 출력을 보니  
아! 나누기 하고 나머지를 구하란거구나 싶었다.

처음에 별 생각 없이 parseInt한 값을 /, % 했었는데 실패가 떴다.  
처음으로 당황.

다시 보니 문제 중에 (1 ≤ m ≤ n ≤ 10<sup>1000</sup>, m과 n은 10진수 정수) 이런 내용이 있었다.
아 BigInt구나.

바꿔서 넣었는데 또 실패.  
이번엔 또 뭐지 싶어 찾아보니 typeof BigInt 는 bigint. 중간에 형변환이 필요했다.

그 후 성공.
