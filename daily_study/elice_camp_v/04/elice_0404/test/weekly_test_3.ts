abstract class Student {
  // 자식 class에서 공통적으로 사용하는 부분을 템플릿 메서드라 합니다.
  // study메소드를 템플릿 메소드로 만들어 주세요.
  public study() {
    console.log("공부 시작!");  
    // 자식 class에서 각자 다른 메소드가 구현되는 takeABreak 메소드를 구현해주세요.
    this.takeABreak();
    console.log("공부 종료!");
  }
  protected abstract takeABreak(): void;
}

// Alice, June, Chloe는 학생입니다. Student Class를 확장하세요.
class Alice extends Student {
  protected takeABreak(): void {
    console.log("잠자며 휴식!");
  }
}

class June extends Student {
  protected takeABreak(): void {
    console.log("커피 한잔하며 휴식!");
  }
}

class Chloe extends Student {
  protected takeABreak(): void {
    console.log("산책하며 휴식!");
  }
}


/**
공부 시작!
잠자며 휴식
공부 종료!
*/
const alice = new Alice();
alice.study();


/**
공부 시작!
커피 한잔하며 휴식
공부 종료!
*/
const june = new June();
june.study();


/**
공부 시작!
산책하며 휴식
공부 종료!
*/
const chloe = new Chloe();
chloe.study();