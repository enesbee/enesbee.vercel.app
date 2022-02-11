---
title: 스터디 메모 '커링'
date: '2022-02-12'
tags: ['study', 'javascript']
draft: false
summary: 기억해둘만한 기초 내용들 내 식대로 정리 - 커링(currying)
---

# 커링

- 인자 가 여러개인 함수의 일부 인자를 고정시키는 새로운 함수를 만드는 기법.

```javascript
function helloFunc(word, name) {
  console.log(`${word}, ${name}!`)
}
```

요거를

```javascript
function helloFunc(word) {
  return function (name) {
    console.log(`${word}, ${name}!`)
  }
}

const printHello = helloFunc('Hello')
printHello('World') // console -> Hello, World!
```

요렇게 바꿔주는 것!

※ 변동 가능성이 적은 인자를 **앞**에, 반대로 가능성이 높은 인자를 **뒤**에!
