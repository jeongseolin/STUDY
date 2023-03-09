let icon1 = document.getElementById('first-favorites-icon');
let icon2 = document.getElementById('second-favorites-icon');
let icon3 = document.getElementById('third-favorites-icon');

icon1.addEventListener('click', function(){
    icon1.classList.add('on');
    icon2.classList.remove('on');
    icon3.classList.remove('on');
});
icon2.addEventListener('click', function(){
    icon2.classList.add('on');
    icon1.classList.remove('on');
    icon3.classList.remove('on');
});
icon3.addEventListener('click', function(){
    icon3.classList.add('on');
    icon1.classList.remove('on');
    icon2.classList.remove('on');
});