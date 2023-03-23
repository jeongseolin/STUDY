//fetch()의 인자로 'https://reqres.in/api/users' 라는 가짜 사용자 정보 API url을 패스합니다.
fetch("https://reqres.in/api/users", {
  method: "POST",
  //3. 헤더를 반드시 명시합니다.
  headers: {'Content-type': 'application/json'},
  //4.body에 `JSON.stringify()`를 사용해서 유저 정보(Object)를 서버에 업데이트합니다.
  body: JSON.stringify({ 
    name: '첫번째 참가자'}),
})
  .then((res) => {
    //2. response.ok는 HTTP Status code가 200-299 사이면 true, 그외는 False입니다. 만약 res.ok일 경우 "Success!" 라는 메시지와 함께 `res.json()`을 반환하고, ok가 아닐 경우, "failed"라는 메시지를 콘솔에 띄웁니다.
    if (res.ok) {
      console.log("success!");
      return res.json();
    } else {
      console.log("failed");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error"));
