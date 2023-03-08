// 4) Click Image Slider
document.querySelector(".right-arrow").onclick = function () {
  var currentSlide = document.querySelector("#photo .slide.active"); // 현재 슬라이드를 가져와라
  var nextSlide = currentSlide.nextElementSibling; // 다음 형제요소를 가져와라
  if (nextSlide === null) { // 다음 형제요소가 없다면
      nextSlide = currentSlide.parentElement.firstElementChild; // 첫번째 형제로 가라
  }
      currentSlide.animate({
      opacity: [1, 0] // fade 효과(투명도 조절)
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both" // 애니메이션이 끝난다음에 어디에 위치에 있을거냐, 첫번째 - 첫번째위치, 마지막 - 마지막위치
  });
  currentSlide.classList.remove("active"); // 화면에서 삭제
  nextSlide.animate({ // 다음 슬라이드를 보여줘라
      opacity: [0, 1]
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both"
  });
  nextSlide.classList.add("active"); 
}

//왼쪽 이미지 슬라이드 기능 구현
document.querySelector(".left-arrow").onclick = function(){
  var currentSlide = document.querySelector("#photo .slide.active");
  var previousSlide = currentSlide.previousElementSibling;
  if (previousSlide === null) {
      previousSlide = currentSlide.parentElement.lastElementChild;
  }
  currentSlide.animate({
      opacity: [1, 0] 
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both"
  })
  currentSlide.classList.remove("active");
  previousSlide.animate({
      opacity: [0, 1]
  }, {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both"
  })
  previousSlide.classList.add("active");
  }

