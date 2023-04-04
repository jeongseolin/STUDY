function axiosDelete() {
  const status = document.getElementById("status");
  
  // axios.delete를 호출하고 반환되는 status를 확인하세요.
  axios.delete("https://reqres.in/api/users/2").then((response) => {
    console.log(response);
    status.innerHTML = response.status;
  });
  
}

export default axiosDelete;