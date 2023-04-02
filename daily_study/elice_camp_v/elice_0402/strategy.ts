interface MakeJuice {
  make(): void
}


class BananaJuice implements MakeJuice {
    make() { console.log("Banana juice"); }
}

class StrawberryJuice implements MakeJuice {
    make() { console.log("Strawberry juice"); }
}


class JuiceCafe {
  private juiceStrategy: MakeJuice | null = null;
  
  makeJuiceStrategy(strategy: MakeJuice): void {
    this.juiceStrategy = strategy;
  }
  
  make(): void {
    if (this.juiceStrategy) {
      this.juiceStrategy.make();
    } else {
      console.log("주스 전략이 지정되지 않았습니다.");
    }
  }
}



// 아래 코드는 수정하지 않습니다. 
const juiceCafe = new JuiceCafe()

juiceCafe.makeJuiceStrategy(new BananaJuice())
juiceCafe.make()

juiceCafe.makeJuiceStrategy(new StrawberryJuice())
juiceCafe.make()
