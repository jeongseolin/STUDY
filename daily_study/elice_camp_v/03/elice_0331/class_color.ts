class Sneakers {
  // 멤버 변수인 color를 정의하세요.
  color: string;
  // 생성자를 만들고 this.를 사용해 멤버변수의 color의 값을 입력된 매개변수로 설정하세요.
  constructor(color: string) {
    this.color = color;
  }
  // 멤버 변수 color를 변경하는 setColor 메소드를 정의하세요.
  setColor(newColor: string) {
    this.color = newColor;
  }
}

// color가 red인 Sneakers의 인스턴스를 생성하세요.
const redShoes = new Sneakers("red");

// 아래 코드의 주석을 해제하고, setColor 메소드로 색상을 변경하세요.
const blueShoes = new Sneakers("red");
blueShoes.setColor("blue");


// 채점을 위한 코드입니다. 수정하지 마세요.
export { Sneakers, redShoes, blueShoes };
