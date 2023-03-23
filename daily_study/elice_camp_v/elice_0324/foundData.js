// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
const inputColorEl = document.getElementById("inputColor");
const buttonSubmitEl = document.getElementById("buttonSubmit");
const hexaCodeEl = document.getElementById("hexaCode");

buttonSubmitEl.addEventListener("click", function(e){
    e.preventDefault();

    fetch('data.json')
        .then(res => res.json())
        .then(datas => {
            // console.log(data);
            const foundData = datas.find(data => data.color === inputColorEl.value);
            hexaCodeEl.innerHTML = foundData.value;
        })
});
