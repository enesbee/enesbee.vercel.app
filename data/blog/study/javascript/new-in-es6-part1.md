---
title: ES6 부터의 자바스크립트(추가된 기능들, 보완된 기능들) - 1
date: '2022-02-19'
tags: ['study', 'javascript']
draft: false
summary: 자바스크립트는 ES6 이전과 이후로 나뉜다..? const와 let의 등장. 단축 속성명(shorthand property names), 계산된 속성명(computed property names)
---

<details>
<summary><strong>ES6 부터의 자바스크립트 시리즈</strong></summary>
<div markdown="1">
  <ul>
    <li>
      <a href="/blog/study/javascript/new-in-es6-part1"><strong>const, let. 단축 속성명, 계산된 속성명</strong></a>
    </li>
    <li>
      <a href="/blog/study/javascript/new-in-es6-part2">전개 연산자, 배열 비구조화, 객체 비구조화</a>
    </li>
    <li>
      <a href="/blog/study/javascript/new-in-es6-part3">프로미스(Promise)</a>
    </li>
    <li>
      <a href="/blog/study/javascript/new-in-es6-part4">async, await</a>
    </li>
  </ul>
</div>
</details>

---

.. 랄까..?

가장 먼저 작성했어야 할 포스팅인데 늦었다.

이미 ES6가 나온지는 오래됐고 그만큼 보편화 되었지만, 처음부터 공부하기로 맘 먹었으니 간단히 포스팅.

**(해당 내용은 실전 리액트 프로그래밍 책을 공부하면서 책 속에 있는 내용을 참조, 인용했습니다.)**

## const, let

### 1. const와 let 이 나온 이유.

1. 기존에 쓰이던 var는 **함수 스코프**였다.
   함수 스코프는 말 그대로 var이 살 수 있는 범위가 함수로 되어있다는 뜻이다.

   ```js
   function varExample1() {
     var i = 1
   }
   console.log(i) // i is not defined
   ```

   변수 i 는 함수 varExample1 스코프이고, 호출하려는 console.log는 그 스코프를 벗어나있다.
   전역 스코프에서 특정(varExample) 스코프로 접근하려는건데, 이와 같이 함수를 벗어난 영역에서 사용하려 하면 에러가 난다.

   ```js
   if (true) {
     var varExample2 = 'enesbee'
   }
   console.log(varExample2) // enesbee

   for (var i = 0; i < 5; i++) {
     console.log(i)
   }
   console.log(i) // 0 1 2 3 4 5
   ```

   이 경우에는 또 에러가 없다. 값들이 사라지질 않는다. 왜냐? 함수가 아니라서..

2. **호이스팅**
   var로 정의된 변수는 그 변수가 있는 스코프의 맨 위로 끌어올라와진다.
   무슨 말이냐면,

   ```js
   console.log(hoistingIssue) // hoistingIssue is not defined
   ```

   ```js
   console.log(hoistingIssue) // undefined
   var hoistingIssue = '뭐지 실행되나?'
   ```

   변수를 분명 밑에 정의 했는데도 위에처럼 에러가 발생하지 않고, 그렇다고 정상적으로 출력되지도 않고 undefined가 나오게 된다. 이상한 녀석이다.

   말하자면,

   ```js
   var hoistingIssue = undefined
   console.log(hoistingIssue)
   hoistingIssue = '뭐지 실행되나?'
   ```

   처럼 제 멋대로 바꿔버린 것이다.

### 2. const, let의 등장

1.  **블록스코프**
    블록`{}` 스코프이다.

    ```js
    if (true) {
      let varExample2 = 'enesbee'
    }
    console.log(varExample2) // varExample2 is not defined

    for (let i = 0; i < 5; i++) {
      console.log(i) // 0 1 2 3 4
    }
    console.log(i) // i is not defined
    ```

    위에 있던 코드에서 var 만 모두 let으로 바꿨다.
    이처럼 기준이 함수에서 블록 안으로 변경되면서 조건문이나 반복문 등에서도 함수 스코프에서 발생하던 문제는 생기지 않게 되었다.

2.  **호이스팅**

    ```js
    console.log(hoistingIssue) // Cannot access 'hoistingIssue' before initialization
    const hoistingIssue = '뭐지 실행되나?'
    ```

    호이스팅 문제도 이와 같이 발생하지 않는... 것처럼 보이지만 그건 아니고,

    ```js
    const blockScope = 1
    if (true) {
      console.log(blockScope2) // Cannot access 'blockScope2' before initialization
      const blockScope2 = 2
    }
    ```

    이런 식으로 변수가 정의된 위치와 호이스팅 되는 위치에 애매하게 끼어버리면, 에러가 발생한다.
    이 위치를 일시적 사각지대 (Temporal Dead Zone, TDZ) 라고 부른다.

    (해당 내용은 [[이웅모님의 글, PoiemaWeb의 호이스팅 항목](https://poiemaweb.com/es6-block-scope#13-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85)]에 정리되어 있다)
    (죄송합니다... 나중에 이에 대해 공부해서 새롭게 포스팅하겠습니다... ㅠㅠ)

3.  **const**
    기존에 있던 하나가 두개가 되었다.
    그 중 const 는 constant, 즉 '상수' 라는 이름이 붙었다.
    (참고로 let은 let me ~, let me alone, ~하게 해줘 할 때 그 let이라던데..)

    이름 그대로 const로 정의된 변수는 재할당이 불가능하게 되어있다. (정확히는 변수의 값 재할당 불가능)

    ```js
    const constant1 = 'a'
    constant1 = 'b' // Assignment to constant variable. 에러 발생.

    var variable1 = 'a'
    variable1 = 'b' // 에러 없음.

    let variable2 = 'a'
    variable2 = 'b' // 에러 없음.
    ```

    그렇지만,

    ```js
    const constantObj = { prop1: 'a' }
    constantObj.prop1 = 'b'
    constantObj.prop2 = 'c'
    console.log(constantObj) // { prop1: 'b', prop2: 'c' }
    ```

    처럼 속성값을 수정하거나 추가하는 것은 가능하다.

## 단축 속성명, 계산된 속성명

### 1. 단축 속성명 (shorthand property names)

단축 속성명은 간편하게 새로운 객체 리터럴을 작성하기 위해 생겨났다.

```js
const name = 'enesbee';
const obj = {
  age: 34,
  name,
  getName() {return this.name;}
  console.log(obj); // { age: 34, name: 'enesbee', getName: [λ: getName] }
  console.log(obj.getName()); // enesbee
};
```

name 처럼 객체의 속성값 일부가 이미 변수로 존재한다면, 그냥 변수 이름만 적어주면 된다.
또한, getName() 처럼 속성값이 함수라면 따로 function 키워드 없이 적어도 된다.

### 2. 계산된 속성명 (computed property names)

계산된 속성명은 객체의 속성명을 간편하게 따로 동적으로 정할 수 있게 하기 위해 나온 문법이다.

```js
function makeOldStyleObject(key, value) {
  const obj = {}
  obj[key] = value
  return obj
}

function makeNewStyleObject(key, value) {
  return { [key]: value }
}
```

별도로 빈 객체를 선언하고 만들고 할 필요 없이 간단하게 생성 가능해졌다.
그래서 이 문법은,

```js
class ComputedPropertyNamesComponent extends React.Component {
  state = {
    count1: 0,
    count2: 0,
    count3: 0,
  }
  // ...
  onClick = (index) => {
    const key = `count${index}`
    const value = this.state[key]
    this.setState({ [key]: value + 1 })
  }
}
```

이런 식(setState에서의 예)으로 간편하게 활용 가능해졌다.

| 참조                                                                                                                      |
| :------------------------------------------------------------------------------------------------------------------------ |
| 실전 리액트 프로그래밍 (이재승 저, 인사이트, 2019, 51-59p)                                                                |
| [이웅모님의 글, PoiemaWeb의 호이스팅 항목](https://poiemaweb.com/es6-block-scope#13-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85) |
