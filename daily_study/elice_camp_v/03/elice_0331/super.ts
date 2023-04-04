class Sneakers {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  setColor(color: string) {
    this.color = color;
  }
}

// `extends` 키워드를 사용하여 Sneakers 클래스를 상속받는 Nike 클래스를 생성하세요.
class Nike extends Sneakers {
  // 생성자를 올바르게 설정하세요.
  constructor(color: string) {
      super(color);
  }
  // 슬로건을 반환하는 saySlogan 메소드를 정의하세요.
  saySlogan() {
      return "Just Do It"
  }
}

// color가 "red"인 Nike 클래스의 인스턴스를 정의하세요.
const myShoe = new Nike("red");

// 아래 주석을 해제하고 정상적으로 실행되는지 확인해보세요.
myShoe.setColor("blue");
console.log(myShoe.saySlogan());

// 채점을 위한 코드입니다. 수정하지 마세요.
export { Nike, myShoe };