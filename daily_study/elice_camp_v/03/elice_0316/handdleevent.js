class Menu {
  // 지시사항을 참고하여 코드를 작성하세요.
  handleEvent(event) {
    // console.log(event)
    let method = "on" + event.type[0].toUpperCase() + event.type.slice(1); // type[0]을 대문자로, 나머지는 붙여주세요. M + ousedown
    this[method]();  // this : menu{} 객체, 메소드 호출 // 문자열로 저장되기 때문에 this.method 하면 안됨.

  }

  onMousedown() {
      elem.innerHTML = "마우스 버튼을 눌렀습니다.";

  }

  onMouseup() {
    elem.innerHTML = "마우스 버튼을 뗐습니다.";
  }
}

let menu = new Menu();
const elem = document.getElementById("elem");
elem.addEventListener("mousedown", menu);
elem.addEventListener("mouseup", menu);
