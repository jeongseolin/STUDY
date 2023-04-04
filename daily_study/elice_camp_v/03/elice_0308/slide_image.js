// 2) Image Slider

var slider = document.querySelector('#slider'); // 선택된 요소의 자식 요소 1개를 찾을때
var slides = slider.querySelector('.slides');
var slide = slides.querySelectorAll('.slide'); // 선택된 요소의 자식 요소 여러 개를 찾을 때 사용

var currentSlide = 0; // 현재 화면에 보여지고 있는 슬라이드가 몇번째 것인가

setInterval(function () {
  // 일정 시간마다 반복적으로 코드를 실행하고자 할 때 사용되는 코드
  var from = -(1024 * currentSlide); // 처음 지점
  var to = from - 1024; // 이동 지점 (왼쪽으로 슬라이드기 때문에 - 좌표)
  slides.animate(
    {
      marginLeft: [from + 'px', to + 'px'],
    },
    {
      duration: 500, // 500ms
      easing: 'ease',
      iterations: 1, // 반복횟수
      fill: 'both', 
    }
  );
  currentSlide++; // 현재 화면에 보이는 슬라이드 번호 증가
  if (currentSlide === slide.length - 1) { // 마지막 슬라이드가 마지막 노출 일때
    currentSlide = 0; // 자동으로 처음으로 이동해라
  }
}, 3000); // 3000ms
