class Dog {
  name: string;
  species: string;
  
  constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
  }
  
  bark() {
      console.log(`${this.name}(${this.species}) : BOWWOW!`);
  }
}

class Puppy extends Dog {
  constructor(name: string, species: string) {
      // super을 사용해 Dog 클래스에 접근할 수 있습니다.
      super(name, species + '-baby');
  }

  bark() {
      console.log(`${this.name}(${this.species}) : bowwow!`);
  }
}

const daisy: Dog = new Dog('Daisy', 'Bulldog');
daisy.bark();

const tom: Puppy = new Puppy('Tom', 'Bulldog');
tom.bark();