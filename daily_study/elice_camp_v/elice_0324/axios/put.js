function axiosPut() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const updateDate = document.getElementById("update_date");
  
  // 수정할 데이터를 선언하세요.
  const updateData = {
    first_name: "White",
    last_name: "Rabbit",
    email: "alice@elice.io",
  };
  
  // axios.put을 호출하고 result에 반환되는 사용자 데이터를 저장하세요.
  axios.put("https://reqres.in/api/users/2", updateData).then((response) => {
    let res = response.data;
    name.innerHTML = res.first_name + " " + res.last_name;
    email.innerHTML = res.email;
    updateDate.innerHTML = res.updatedAt;
  });
  
  
}

export default axiosPut;