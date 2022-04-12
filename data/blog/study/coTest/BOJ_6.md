---
title: 백준 Node 5554, 6749, 7287, 8370
date: '2022-04-09'
tags: ['취미코테']
draft: false
summary: solved.ac를 통해 연습한 BOJ 문제. 5554(심부름 가는 길) 6749(Next in line) 7287(등록) 8370(Plane)
---

## 5554(심부름 가는 길)

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let answer = 0
input.map((v) => (answer += v))
console.log(`${Math.floor(answer / 60)}\n${answer % 60}`)
```

_문제_

> 승균이는 매일 학교, PC방, 학원에 다닌다. 반복되는 일상에 익숙해진 승균이는 이동시간을 단축해서 PC방에 더 오래 머물고 싶었다. 그래서 스톱워치를 들고 이동할 때마다 기록을 잰 후 집에 가서 분석해보기로 했다.
>
> 집에 도착한 승균이는 측정한 결과를 보는 데, 전부 초 단위로 기록되어있다! 맨날 놀기만 해서 총 이동 시간이 몇 분 몇 초인지 계산을 못 하는 승균이를 도와주자.
>
> 하루 동안 측정한 결과가 주어지면, 이날의 총 이동 시간이 몇 분 몇 초인지 출력하는 프로그램을 작성하시오.

_입력_

> 입력은 총 4줄이며, 한 줄에 하나씩 양의 정수가 적혀있다.
>
> - 첫 번째 줄에 집에서 학교까지의 이동 시간을 나타내는 초가 주어진다.
> - 두 번째 줄에 학교에서 PC방까지의 이동 시간을 나타내는 초가 주어진다.
> - 세 번째 줄에 PC방에서 학원까지의 이동 시간을 나타내는 초가 주어진다.
> - 마지막 줄에 학원에서 집까지의 이동 시간을 나타내는 초가 주어진다.
>
> 집에 늦게 가면 혼나기 때문에, 총 이동시간은 항상 1 분 0 초 이상 59 분 59 초 이하이다.

_출력_

> 총 이동시간 x 분 y 초를 출력한다. 첫 번째 줄에 x를, 두 번째 줄에 y를 출력한다.

_썰_

`answer/60`을 하면 3.716666666666667 이런 값이 나온다.
어차피 따로 초를 표시해줄꺼니까 과감하게 분에서 소수점을 버리기로 했다.

---

## 6749(Next in line)

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(input[1] * 2 - input[0])
```

_문제_

> You know a family with three children. Their ages form an arithmetic sequence: the difference in ages between the middle child and youngest child is the same as the difference in ages between the oldest child and the middle child. For example, their ages could be 5, 10 and 15, since both adjacent pairs have a difference of 5 years.
>
> Given the ages of the youngest and middle children, what is the age of the oldest child?

_입력_

> The input consists of two integers, each on a separate line. The first line is the age Y of the youngest child (0 ≤ Y ≤ 50). The second line is the age M of the middle child (Y ≤ M ≤ 50).

_출력_

> The output will be the age of the oldest child.

_썰_

대충 계산식으로 말하면 (막내 + 첫째) / 2 하면 중간이니까 바꿔말하면
첫째 = 중간 \* 2 - 막내가 되겠네.

---

## 7287(등록)

```js
console.log(18)
console.log('enesbee')
```

_문제_

> 자신이 백준 온라인 저지(BOJ)에서 맞은 문제의 수와 아이디를 그대로 출력하는 프로그램을 작성하시오.

_입력_

> 이 문제는 입력이 없다.

_출력_

> 첫 줄에 자신이 맞은 문제의 수, 둘째 줄에 아이디를 출력한다.

_썰_

브론즈5는 이제 그만 풀어야지.
문제 보고나서 입력값이 없는데 어디서 가져오란거지 싶어서 크롬 개발자도구까지 열어서 혹시 받아오는 데이터가 있나까지 찾아봤다.
인터넷에 찾아보니 그냥 홈페이지 내 유저페이지에 가서 "맞은 문제" 값을 찍어내란거였다.;

---

## 8370(Plane)

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(input[0] * input[1] + input[2] * input[3])
```

_문제_

> Byteland Airlines recently extended their aircraft fleet with a new model of a plane. The new acquisition has n1 rows of seats in the business class and n2 rows in the economic class. In the business class each row contains k1 seats, while each row in the economic class has k2 seats.
>
> Write a program which:
>
> - reads information about available seats in the plane,
> - calculates the sum of all seats available in that plane,
> - writes the result.

_입력_

> In the first and only line of the standard input there are four integers n1, k1, n2 and k2 (1 ≤ n1, k1, n2, k2 ≤ 1 000), separated by single spaces.

_출력_

> The first and only line of the standard output should contain one integer - the total number of seats available in the plane.

_썰_

한국어로 표현하자면 비즈니스 클래스와 이코노미 클래스의 열 값과 행 값을 각각 순서대로 줄테니 총 좌석의 수를 구해라 라는건데..  
(비즈니스 열X비즈니스 행) + (이코노미 열X이코노미 행) 인거다.

---
