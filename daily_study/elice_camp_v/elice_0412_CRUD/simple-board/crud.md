# CRUD
### 1) CRUD 란?
- <b>Create, Read, Update, Delete</b>
- 데이터를 다루는 네 가지 기본적인 기능
- <b>Create</b> : 게시글 작성
- <b>Read</b> : 게시글의 목록, 게시글의 상세 정보
- <b>Update</b> : 게시글 수정
- <b>Delete</b> : 게시글 삭제

### 2) Express.js + Mongoose로 CRUD 구현하기
1. 모델 선언하기
   - shortId
   - nanoid 패키지
   - Schema 선언 (+ timestamps 옵션추가)
2. 게시글 작성
3. 게시글 목록 및 상세
   - formatDate 함수 추가하기
4. 게시글 수정
   - html form은 PUT method를 지원하지 않기 때문에 post 사용
   - findOneAndUpdate( )
5. 게시글 삭제
   - html form은 DELETE 메서드를 지원하지 않음.
   - fetch 함수로 HTTP Delete 요청