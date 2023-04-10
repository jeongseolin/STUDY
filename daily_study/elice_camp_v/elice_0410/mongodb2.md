# MongoDB와 Mongoose
## 3) Mongoose ODM
- Object Data Modeling, MongoDB의   <b>Collection을 모델화</b>하여, 관련 기능들을 쉽게 사용/관리하도록 도와주는 패키지
- <b>연결관리</b> : 간단하게 데이터베이스와의 연결상태를 관리해줌
- <b>스키마 관리</b> : Code-Level에서 스키마를 정의하고 관리할 수 있게 해 줌
- <b>`Populate`</b> : Join과 유상한 기능 구현가능, 하위 document처럼 사용할 수 있게 해줌
  
[Mongoose ODM 사용 방법]
1. 스키마 정의
2. 모델 만들기
3. 데이터베이스 연결
4. 모델 사용 : CRUD 수행

## 4) Query Operators
- $lt(미만), $lte(이하), $gt(초과), $gte(이상) : range query
- $in : 다중 값, 배열에 주어진 값 중 최소 한 개의 일치하는 값을 가진 document를 검색한다.
- $or : 다중 조건