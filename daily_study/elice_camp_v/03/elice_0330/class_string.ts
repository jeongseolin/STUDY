class Dog {
  name: string;
  species: string;

  constructor(name: string, species: string) { // 생성자 안에서 무조건 this 사용!
      this.name = name;
      this.species = species;
  }

  bark(): void { // 아무것도 반환을 안하는 구나
      console.log(`${this.name}(${this.species}) : BOWWOW!`);
  }
}

const daisy: Dog = new Dog('Daisy', 'Bulldog');

daisy.bark();