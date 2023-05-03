# React 기초 2
### 1) Props
- Properties
- 주로 Component '재사용'을 위해 사용
- Props는 <b>읽기 전용</b>이다.
- DOM Element 
  - Attribute는 camel case로 작성
  - `data-`, `aria-`로 시작하는 것은 예외
- class -> <b>`className`</b>
- for -> <b>`htmlFor`</b>
- <b>`defaultChecked`, `defaultValue`</b> : 초기값 설정 시
- <b>`key`</b> : React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다. <b>고유한 값</b>을 가져야 한다.

### 2) State
- Component 내에서 유동적으로 `변할 수 있는 값`을 저장
- State 값을 직접 변경하지 마세요. -> <b>`setState()`</b> 함수 사용하기
  - import React, { useState } from 'react';
- Object를 갖는 State -> <b>`newUser = {...current}`</b> 새로운 객체로 만들어서 사용하기

### 3) 