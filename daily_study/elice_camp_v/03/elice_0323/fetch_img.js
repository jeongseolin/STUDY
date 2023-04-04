// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
const buttonSubmit = document.getElementById('buttonSubmit');
const imageContainer = document.getElementById('dogImage');

buttonSubmit.addEventListener('click', function(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            imageContainer.setAttribute('src', data.message);
        });
});
