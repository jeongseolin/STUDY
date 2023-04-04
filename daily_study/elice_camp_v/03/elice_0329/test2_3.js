// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
// 입력 칸에 숫자를 입력한 후 버튼을 클릭하면, 해당 숫자 이상의 확진자 수를 가진 날짜의 수를 화면에 나타내는 코드를 작성해보세요.
const inputNumberEl = document.getElementById("inputNumber");
const buttonSubmitEl = document.getElementById("buttonSubmit");
const numberOfDatesEl = document.getElementById("numberOfDates");

buttonSubmitEl.addEventListener("click", function(e) {
    e.preventDefault();
    fetch('coronaData.json')
        .then(res => res.json())
        .then(datas => {
                const filteredData = datas.filter(data => data.new_cases >= inputNumberEl.value);
            numberOfDatesEl.innerHTML = filteredData.length;
            });
});

    
