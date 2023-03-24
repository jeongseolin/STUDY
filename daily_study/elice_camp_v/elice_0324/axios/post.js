function axiosPost() {
  const token = document.getElementById("token");
  // 삽입할 데이터 객체를 선언하세요.
  const login = { email: "eve.holt@reqres.in", password: "cityslicka" };
  
  // axios.post를 호출하고 반환되는 토큰 값을 token의 innerHTML에 저장하세요.
  axios.post("https://reqres.in/api/login", login).then((response) => {
    let res = response.data.token;
    token.innerHTML = res;
  });
  
  
}

export default axiosPost;