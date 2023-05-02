# Pagination
### 1) Pagination이란?
- 데이터를 균일한 수로 나누어 페이지로 분리하는 것
- <b>`page`</b> : 현재 페이지
- <b>`perPage`</b> : 페이지 당 게시글 수
- query는 문자열로 전달되기 때문에 <b>Number로 형변환</b>이 필요함

### 2) Express.js + Mongoose의 Pagination (1)
- MongoDB의 <b>`limit`</b>(= perPage), <b>`skip`</b>(검색시 포함되지 않을 데이터 수)을 사용해 pagination 구현 가능
- 데이터의 순서가 유지될 수 있도록 <b>sort</b>를 사용 할 수 있도록 함
- <b>Math.ceil</b>(게시글 수 / 페이지 당 게시글 수) = 총 페이지 수 (* 올림함수 사용)
  
### 3) Express.js + Mongoose의 Pagination (2)
- <b>`mixin`</b> 선언
- pagination이 필요한 페이지에서 <b>해당 템플릿을 include</b>한 후, pagination으로 </b>mixin</b>을 사용한다.