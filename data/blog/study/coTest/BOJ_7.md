---
title: 백준 Node 8437 10430

 
STANDARD
date: '2022-04-12'
tags: ['취미코테']
draft: false
summary: solved.ac를 통해 연습한 BOJ 문제. 8437 (Julka) 10430(나머지)
---

## 8437 (Julka)

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt)
const half = (input[0] - input[1]) / 2n
console.log(`${half + input[1]}\n${half}`)
```

_문제(구글번역)_

> Julka는 어제 유치원에서 다음 수수께끼를 풀면서 가정교사를 놀라게 했습니다.
>
> > Klaudia와 Natalia는 함께 사과 10개를 가지고 있지만 Klaudia는 Natalia보다 2개 더 많은 사과를 가지고 있습니다. 각 소녀들은 몇 개의 사과를 가지고 있습니까?
> > Julka는 생각 없이 대답했습니다. Klaudia는 6개의 사과를 가지고 있고 Natalia는 4개의 사과를 가지고 있습니다.
>
> 튜터는 Julka의 대답이 우발적이지 않은지 확인하기로 결정하고 과제의 사과 개수를 늘릴 때마다 수수께끼를 반복했습니다. Julka는 항상 올바르게 대답했습니다. 놀란 선생님은 Julka의 '연구'를 계속하고 싶었지만 너무 많은 숫자로 인해 스스로 퍼즐을 빨리 풀 수 없었습니다. 유치원 교사를 돕고 해결책을 제안하는 프로그램을 작성하십시오.
>
> 다음과 같은 프로그램을 작성하십시오.
>
> - (표준 입력에서) 두 소녀가 함께 가지고 있는 사과 수와 Klaudia가 가지고 있는 사과 수를 읽습니다.
> - Klaudia의 사과 수와 Natalia의 사과 수를 계산합니다.
> - 결과를 씁니다(표준 출력에).

_입력(구글번역)_

> 입구는 두 줄로 되어 있습니다. 첫 번째 줄은 소녀들이 소유한 모든 사과의 수를 포함하고, 두 번째 줄은 Klaudia가 얼마나 더 많은 사과를 가지고 있는지를 나타냅니다. 두 숫자 모두 정수와 양수입니다. 소녀들은 총 10<sup>100</sup> 개 이하 의 사과를 가지고 있는 것으로 알려져 있습니다 . 보시다시피, 사과는 매우 작을 수 있습니다.
>
> _출력(구글번역)_

> 당신의 프로그램은 (표준 출력에) 두 개의 연속적인 라인에 두 개의 정수를 한 줄에 하나씩 써야 합니다. 첫 번째 줄에는 Claudia의 사과 개수가 포함되어야 하고 두 번째 줄에는 Natalia의 사과 개수가 포함되어야 합니다. 소녀들은 항상 사과를 통째로 가지고 있는 것으로 알려져 있습니다.

_문제_

> Julka zaskoczyła wczoraj w przedszkolu swoją wychowawczynię rozwiązując następującą zagadkę:
>
> > Klaudia i Natalia mają razem 10 jabłek, ale Klaudia ma o 2 jabłka więcej niż Natalia. Ile jabłek ma każda z dziewczynek?
> > Julka odpowiedziała bez namysłu: Klaudia ma sześć jabłek, natomiast Natalia ma cztery jabłka.
>
> Wychowywaczyni postanowiła sprawdzić, czy odpowiedź Julki nie była przypadkowa i powtarzała zagadkę, za każdym razem zwiększając liczby jabłek w zadaniu. Julka zawsze odpowiadała prawidłowo. Zaskoczona wychowawczyni chciała kontynuować ,,badanie'' Julki, ale przy bardzo dużych liczbach sama nie potrafiła szybko rozwiązać zagadki. Pomóż pani przedszkolance i napisz program, który będzie podpowiadał jej rozwiązania.
>
> Napisz program, który:
>
> - wczyta (ze standardowego wejścia) liczbę jabłek, które mają razem obie dziewczynki oraz o ile więcej jabłek ma Klaudia,
> - obliczy, ile jabłek ma Klaudia i ile jabłek ma Natalia,
> - wypisze wynik (na standardowe wyjście).

_입력_

> Wejście składa się z dwóch wierszy. Pierwszy wiersz zawiera liczbę wszystkich jabłek posiadanych przez dziewczynki, natomiast drugi - liczbę mówiącą, o ile więcej jabłek ma Klaudia. Obie liczby są całkowite i dodatnie. Wiadomo, że dziewczynki mają razem nie więcej niż 10100 (jedynka i sto zer) jabłek. Jak widać, jabłka mogą być bardzo malutkie.

_출력_

> Twój program powinien wypisać (na standardowe wyjście) w dwóch kolejnych wierszach dwie liczby całkowite, po jednej w wierszu. Pierwszy wiersz powinien zawierać liczbę jabłek Klaudii, natomiast drugi - liczbę jabłek Natalii. Wiadomo, że dziewczynki zawsze mają całe jabłka.

_썰_

이 문제로 여러번 틀렸다. 함정카드가 숨어있었다.  
10<sup>100</sup>. 문제만 잘 읽었으면 별 문제 없었을텐데 몰아치는 외국어 폭풍에 정신을 잃은 듯 하다.  
보통 Number로 하던 부분을 BigInt로, 2로 나누던걸 2n으로 바꾸고 나서 그제서야 겨우 통과됐다.

---

## 10430(나머지)

```js
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log((input[0] + input[1]) % input[2])
console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2])
console.log((input[0] * input[1]) % input[2])
console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2])
```

_문제_

> (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
>
> (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
>
> 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

_입력_

> 첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

_출력_

> 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

_썰_

네.. 죄송합니다.. 사실 문제도 읽지 않았습니다..
그냥 출력에서 하라고 써있는거 복붙했습니다..
되더라고요..

---

_오늘의썰_

1. 주말동안 일이 있어 잠시 본가에 다녀왔다. 그 바람에 차곡차곡 쌓이던 solved.ac 잔디가 중간에 구멍이 나버렸다. 슬프다. ㅠㅠ
2. 오늘 처음으로 순서대로 진행하던 내용을 건너뛰었다. 건너뛴 내용으로는..

- 폴란드어 문제.
- 예제없이 스타워즈 로고, 고양이, 개 그리기. 아무튼 5337, 5338, 5339, 5522번에서 다뤘던 내용과 흡사(아니 그냥 방법은 똑같다)한 문제들.  
  이었다.
  난이도도 최하이고 기초다지기 문제라지만 아.. 너무... 좀 그래서 건너 뛰었다.

3. 내일부터는 브론즈4를 풀꺼다. 브론즈5도 좋은 문제가 많았지만 그래도 사칙연산, 구현 이라는 범주내에서 벗어나지 않는다. 더 하는건 시간낭비같다.
