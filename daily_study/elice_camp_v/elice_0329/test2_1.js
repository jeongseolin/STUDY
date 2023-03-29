// setTimeout을 이용해 3초 카운트하기
const btn = document.getElementById("btn");
const text = document.getElementById("text");

const Numcount = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const clickBtn = () => {
  // 3초를 카운트하는 타이머를 구현하세요.
  let count = 1;
  text.innerText += `${count}초 \n`;

  Numcount(1000).then(() => {
    count++;
    text.innerText += `${count}초 \n`;
    return Numcount(1000);
  }).then(() => {
    count++;
    text.innerText += `${count}초 \n`;
    return Numcount(1000);
  });
};

btn.addEventListener("click", clickBtn);
