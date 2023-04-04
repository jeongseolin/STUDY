function axiosGet() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  
  // axios.get을 호출하고 반환되는 데이터를 확인하세요.
  // 확인한 데이터에서 이름과 이메일을 출력 결과와 같이 출력하세요.
  axios.get('https://reqres.in/api/users/2')
    .then((response) => {
      let res = response.data.data;
      name.innerHTML = res.first_name + " " + res.last_name;
      email.innerHTML = res.email;
    }); 
  
}


export default axiosGet;