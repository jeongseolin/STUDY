# MongoDB와 Mongoose
## 1) MongoDB
- MongoDB 란?
  - 대표적인 <b>NoSQL, Document DB</b>(자료를 문서로 저장하는 DB), 엄청나게 큰 DB라는 의미
- RDB와 NoSQL
  - `RDB` : Relation Database, 관계형 데이터베이스, 데이터 구조화(DDL), 스키마, 대표 MySQL
  - `NoSQL` : Non SQL, Not Only SQL, 데이터 구조화X - 유연하게 저장, 사전작업 없이 데이터베이스를 사용할 수 있음, 대표 MongoDB
- MongoDB 기본 개념
  - <b>Database > Collection > Document</b>
  - Document - ObjectID : 각 document의 유일한 키 값, 자동으로 생성되는 값
  - 직접 설치 사용 or 클라우드 사용
  - MongoDB Compass : 시각화하여 관리할 수 있게 도와주는 도구
  
## 2) MongoDB shell : <b>`/bin/zsh`</b>
- 자신이 어떤 shell을 사용하는지 다음 명령어를 통해 알아봅니다.
- echo $SHELL
- 보통 두 가지 결과로 나뉩니다. bin/bash와 /bin/zsh 입니다.
- 자신이 어떤 shell을 사용하는지 알아둡니다.
- 내꺼는 /bin/zsh

## 3) 