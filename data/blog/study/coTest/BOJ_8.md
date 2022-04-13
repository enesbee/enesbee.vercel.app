---
title: 백준 Node 1008 2420 1297 1712
date: '2022-04-13'
tags: ['취미코테']
draft: false
summary: solved.ac를 통해 연습한 BOJ 문제. 1008 (A/B), 2420 (사파리월드), 1297 (TV 크기), 1712 (손익분기점)
---

_계획_

브론즈4에선 스탠다드부터. 그다음엔 구현 태그가 안붙은 문제들 위주로 풀 계획이다.

## 1008 (A/B)

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(input[0] / input[1])
```

_문제_

> 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

_입력_

> 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

_출력_

> 첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.
>
> 10-9 이하의 오차를 허용한다는 말은 꼭 소수 9번째 자리까지만 출력하라는 뜻이 아니다.

_썰_

출력 마지막 줄에 근거해 .toFixed()는 하지 않았다.

---

## 2420 (사파리월드)

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.abs(input[0] - input[1]))
```

_문제_

> 사파리월드는 인터넷으로만 존재하는 미스테리한 나라이다. 사파리월드에는 2개의 서브도메인이 seunghwan.royal.gov.sw와 kyuhyun.royal.gov.sw 이 있는데, 이것이 couple.royal.gov.sw으로 합쳐질 것이다. 그러나 도메인 관리 센터 SWNIC(센터장: 김동규)에는 엄격한 룰이 있다. 두 서브도메인을 합칠 때, 유명도의 차이가 너무 차이나지 않을 경우에만 두 서브도메인을 결혼시키는 것이다. 서브도메인의 유명도는 정수이다. 두 서브도메인의 유명도가 주어졌을 때, 그 차이를 구하는 프로그램을 작성하시오.

_입력_

> 첫째 줄에 두 도메인의 유명도 N과 M이 주어진다. (-2,000,000,000 ≤ N, M ≤ 2,000,000,000)

_출력_

> 첫째 줄에 두 유명도의 차이 (|N-M|)을 출력한다.

_썰_

절대값은 Math.abs() 로 계산했다.

---

## 1297 (TV 크기)

```js
const [D, H, W] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const r = Math.sqrt(H ** 2 + W ** 2)
console.log(`${Math.floor((D * H) / r)} ${Math.floor((D * W) / r)}`)
```

_문제_

> 김탑은 TV를 사러 인터넷 쇼핑몰에 들어갔다. 쇼핑을 하던 중에, TV의 크기는 그 TV의 대각선의 길이로 나타낸 다는 것을 알았다. 하지만, 김탑은 대각선의 길이가 같다고 해도, 실제 TV의 크기는 다를 수도 있다는 사실에 직접 TV를 보러갈걸 왜 인터넷 쇼핑을 대각선의 길이만 보고있는지 후회하고 있었다.
>
> 인터넷 쇼핑몰 관리자에게 이메일을 보내서 실제 높이와 실제 너비를 보내달라고 했지만, 관리자는 실제 높이와 실제 너비를 보내지 않고 그것의 비율을 보내왔다.
>
> TV의 대각선 길이와, 높이 너비의 비율이 주어졌을 때, 실제 높이와 너비의 길이를 출력하는 프로그램을 작성하시오.

_입력_

> 첫째 줄에 TV의 대각선 길이 D, TV의 높이 비율 H, TV의 너비 비율 W이 공백 한 칸을 사이에 두고 주어진다.

_출력_

> 첫째 줄에 TV의 높이와 TV의 너비를 공백 한 칸을 이용해서 구분지은 후 출력한다. 만약, 실제 TV의 높이나 너비가 소수점이 나올 경우에는 그 수보다 작으면서 가장 큰 정수로 출력한다. (예) 1.7 -> 1

_제한_

> - 5 ≤ D ≤ 1,000
> - 1 ≤ H ≤ 99
> - 2 ≤ W ≤ 100
> - H < W
> - D, H, W는 정수

_썰_

수학 어렵다잉.  
알아야 할 것 : 실제 높이(aH, actual height), 실제 너비(aW, actual width)

알고 있는 것 : TV의 실제 대각선 길이 D, TV의 화면비 중 높이비율 H, TV의 화면비 중 너비비율 W, 그리고 피타고라스 정리 a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

우선, 화면비에 근거한 대각선 비율 r은,
피타고라스 정리로 바꿔 말하면,  
H<sup>2</sup> + W<sup>2</sup> = r<sup>2</sup>  
∴ 제곱근r = H제곱 + W제곱 = Math.sqrt(H ** 2 + W ** 2)

이제 실제 높이(aH)를 구하자면,  
D<sup>2</sup> = aH<sup>2</sup> + aW<sup>2</sup>  
...
어휴 길다. 대충 여백이 부족해서 적지 않는걸로 해야지.  
aH = D \* H / r

여기에 _출력_ 부분에서 길게 적어놓았지만 한마디로 소수점은 버리라고 했으니,  
aH = Math.floor(D*H/r)  
aW = Math.floor(D*W/r)  
로 풀었다.

---

## 1712 (손익분기점)

_처음 생각한 코드_

```js
const [F, V, P] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let BEP = 1
if (P <= V) console.log(-1)
if (P > V) {
  while (F + V * BEP >= P * BEP) {
    BEP += 1
  }
  console.log(BEP)
}
```

_맞춘 코드_

```js
const [F, V, P] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const BEP = Math.floor(F / (P - V) + 1)
P <= V ? console.log(-1) : console.log(BEP)
```

_문제_

> 월드전자는 노트북을 제조하고 판매하는 회사이다. 노트북 판매 대수에 상관없이 매년 임대료, 재산세, 보험료, 급여 등 A만원의 고정 비용이 들며, 한 대의 노트북을 생산하는 데에는 재료비와 인건비 등 총 B만원의 가변 비용이 든다고 한다.
>
> 예를 들어 A=1,000, B=70이라고 하자. 이 경우 노트북을 한 대 생산하는 데는 총 1,070만원이 들며, 열 대 생산하는 데는 총 1,700만원이 든다.
>
> 노트북 가격이 C만원으로 책정되었다고 한다. 일반적으로 생산 대수를 늘려 가다 보면 어느 순간 총 수입(판매비용)이 총 비용(=고정비용+가변비용)보다 많아지게 된다. 최초로 총 수입이 총 비용보다 많아져 이익이 발생하는 지점을 손익분기점(BREAK-EVEN POINT)이라고 한다.
>
> A, B, C가 주어졌을 때, 손익분기점을 구하는 프로그램을 작성하시오.

_입력_

> 첫째 줄에 A, B, C가 빈 칸을 사이에 두고 순서대로 주어진다. A, B, C는 21억 이하의 자연수이다.

_출력_

> 첫 번째 줄에 손익분기점 즉 최초로 이익이 발생하는 판매량을 출력한다. 손익분기점이 존재하지 않으면 -1을 출력한다.

_썰_

고정비용을 F(Fixed Cost), 가변비용을 V(Variable Cost), 가격을 P(Price)라는 이름으로 정했다.
이 문제는 간단히 말해,
F + (V _ x) < P _ x 되는 시점을 구하란거다. 단 C는 B보다는 무조건 커야 하고.
근데 틀렸다. 런타임 에러도 아니고 그냥 틀렸다 뭐지;

그래서 든 생각이 수익에서 원가를 뺀게 남는돈이니까 P - V를 했다. 그리고 최초 1회 지출되는 비용에서 이 값을 나눴다. F / (P - V)  
그런데 이 값이 딱 맞아 떨어진다면? (F % (P - V) = 0이 되는 경우) 그건 이익이 발생하진 않은 경우이지 않은가. 그래서 +1을 해줬다.  
그랬더니 통과가 되네?

흠.. 통과가 되니까 기분은 좋은데 앞에 작성한 코드가 왜 틀렸는지는 아직도 의문이다.
뭔가 오류가 있었나..

++

```js
const [F, V, P] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
if (P <= V) console.log(-1)
if (P > V) {
  let BEP = 1
  let expense = F + V
  let profit = P
  while (expense >= profit) {
    BEP += 1
    expense += V
    profit += P
  }
  console.log(BEP)
}
```

이렇게 하니까 시간초과는 떴다.  
틀린 답이라도 틀렸습니다 가 아니라 시간초과가 뜨니까 안심은 되네 ;

---
