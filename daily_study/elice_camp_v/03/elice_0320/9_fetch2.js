// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
const passwordEl = document.querySelector("#password")
const buttonEl = document.querySelector("#buttonSubmit");
buttonEl.addEventListener("click", function(e){
    e.preventDefault();

    fetch('https://randomuser.me/api/?password=upper,lower,number')
        .then(res => res.json())
        .then(data => {
            const showPW = data.results[0].login.password;
            passwordEl.innerHTML = showPW;
        })
});
