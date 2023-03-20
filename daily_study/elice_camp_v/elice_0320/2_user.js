// findUserByUsername, findAddressByUserId 함수는 모두 Promise를 리턴합니다.
// findUserByUsername API 함수를 이용하여, value 값을 이용해 유저를 검색합니다.
// findAddressByUserId API 함수를 이용하여, 찾은 user의 id를 이용해 주소를 검색합니다.
// searchAddress는 address 객체를 반환하는 Promise를 리턴하도록 구현합니다.
// catch를 이용해, 에러 발생 시 error에 error.message를 저장하도록 구현합니다.

function searchAddress() {
  error = "";
  
  return findUserByUsername(value) 
      .then(user => findAddressByUserId(user.id))
      .catch(e => { error = e.message });
}