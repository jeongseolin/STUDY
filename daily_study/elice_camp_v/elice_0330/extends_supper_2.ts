abstract class Animal {
  name: string;
  species: string;
  
  constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
  }
  
  abstract bark() : void; // abstract 이런거를 만들어서, 어떻게 세팅을 할거다. 정보를 등록하는 것 (보험 차원, 내가 이런 것들을 구현을 확실히 해야되)
}

class Dog extends Animal {
  constructor(name: string, species: string) {
      super(name, `Dog-${species}`);
  }

  bark() {
      console.log(`${this.name}(${this.species}) : BOWWOW!`);
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
      super(name, `Cat-${species}`);
  }

  bark() {
      console.log(`${this.name}(${this.species}) : meow!`);
  }
}

const daisy: Dog = new Dog('Daisy', 'Bulldog');
daisy.bark();

const cheese: Cat = new Cat('Cheese', 'Bengal');
cheese.bark();