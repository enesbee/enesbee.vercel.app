---
title: type alias vs interface
date: '2022-05-02'
tags: ['study', 'TypeScript']
draft: true
summary: 타입스크립트를 공부하면서 느낀 type alias 와 interface의 차이점 정리
---

대충 정리하면

1. 인터페이스는 확장할 때 `extends` 를 쓰고, 타입은 `&`를 쓴다.
2. **인터페이스**는 같은 이름으로 **기존 인터페이스에 새 필드를 추가**할 수 있지만 타입은 그게 안된다. (선언 병합에 대한 이야기)
3. **타입**은 기존의 원시타입으로 이루어진 **유니언 타입에 바로 별칭을 지어 붙일 수 있지만** 인터페이스는 그게 안된다.(자바스크립트 문법처럼 생각하면 인터페이스는 오브젝트를 만들고, 타입은 변수를 지정하는 것처럼 작성한다.)
4. 개인적인 선호에 따라 type alias와 interface를 알아서 쓰되, 이왕이면 type alias 의 기능이 필요할 때만 type alias를 쓰고 그 외에는 **interface를 써라**.

인듯요.
interface는 웬만해선 다 쓸 수 있으니깐 type alias에 대해 공부를 잘 해서 type만이 가질 수 있는 강점에 대해 더 알아봐야 할 듯.

---

# type alias와 interface

## type alias

똑같은 타입을 한 번 이상 재사용하거나 또 다른 이름으로 부르고 싶은 경우도 존재합니다.  
*타입 별칭*은 바로 이런 경우를 위하여 존재하며, *타입*을 위한 *이름*을 제공합니다.
타입 별칭을 사용하면 단지 객체 타입뿐이 아닌 모든 타입에 대하여 새로운 이름을 부여할 수 있습니다.  
예를 들어, 아래와 같이 유니언 타입에 대하여 타입 별칭을 부여할 수도 있습니다.

```ts
type Point = {
  x: number
  y: number
}

type ID = number | string
```

([타입스크립트 공식문서 중 타입 별칭](https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html#%ED%83%80%EC%9E%85-%EB%B3%84%EC%B9%AD))

## interface

*인터페이스 선언*은 객체 타입을 만드는 또 다른 방법입니다.
TypeScript는 오직 printCoord에 전달된 값의 *구조*에만 관심을 가집니다. 즉, 예측된 프로퍼티를 가졌는지 여부만을 따집니다.  
... 이하 생략 ...

```ts
interface Point {
  x: number
  y: number
}
```

([타입스크립트 공식문서 중 인터페이스](https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html#%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4))

## 타입 별칭과 인터페이스의 차이점

<table class='full-width-table'>
  <tbody>
    <tr>
      <th><code>인터페이스</code></th>
      <th><code>타입</code></th>
    </tr>
    <tr>
      <td>
        <p>인터페이스 확장하기</p>
        <code><pre>
interface Animal {
  name: string
}<br/>
interface Bear extends Animal {
  honey: boolean
}<br/>
const bear = getBear() 
bear.name
bear.honey
        </pre></code>
      </td>
      <td>
        <p>교집합을 통하여 타입 확장하기</p>
        <code><pre>
type Animal = {
  name: string
}<br/>
type Bear = Animal & { 
  honey: Boolean 
}<br/>
const bear = getBear();
bear.name;
bear.honey;
        </pre></code>
      </td>
    </tr>
    <tr>
      <td>
        <p>기존의 인터페이스에 새 필드를 추가하기</p>
        <code><pre>
interface Window {
  title: string
}<br/>
interface Window {
  ts: TypeScriptAPI
}<br/>
const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
        </pre></code>
      </td>
      <td>
        <p>타입은 생성된 뒤에는 달라질 수 없다</p>
        <code><pre>
type Window = {
  title: string
}<br/>
type Window = {
  ts: TypeScriptAPI
}<br/>
<span style="color: #A31515"> // Error: Duplicate identifier 'Window'.</span><br/>
        </pre></code>
      </td>
    </tr>
    </tbody>
</table>

- TypeScript 4.2 이전 버전에서는, 타입 별칭 이름이 오류 메시지에 나타날 수 있고, 때로는 동등한 익명 타입을 대신하여 나타날 수 있습니다(이는 경우에 따라 바람직할 수도 있고 아닐 수도 있습니다). 인터페이스는 항상 오류 메시지에 이름이 나타납니다.
- 타입 별칭은 선언 **병합에 포함될 수 없지만, 인터페이스는 포함될 수 있습니다**.
- 인터페이스는 **오직 객체의 모양을 선언하는 데에만 사용되며, 기존의 원시 타입에 별칭을 부여하는 데에는 사용할 수는 없습니다**.
- 인터페이스의 이름은 **항상 있는 그대로** 오류 메시지에 나타납니다. 단, 이는 오직 코드상에서 해당 인터페이스가 이름으로 사용되었을 때에만 해당합니다.

대부분의 경우 개인적 선호에 따라 인터페이스와 타입 중에서 선택할 수 있으며, 필요하다면 TypeScript가 다른 선택을 제안할 것입니다. 잘 모르겠다면, 우선 `interface`를 사용하고 이후 문제가 발생하였을 때 `type`을 사용하기 바랍니다.

([타입스크립트 공식문서 중 타입 별칭과 인터페이스의 차이점](https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html#%ED%83%80%EC%9E%85-%EB%B3%84%EC%B9%AD%EA%B3%BC-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90))
