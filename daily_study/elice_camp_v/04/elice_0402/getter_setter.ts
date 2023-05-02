class personInfo {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }

  setAge(newAge: any): string {
    if (typeof newAge === 'number') {
      this.age = newAge;
      return `age changed to ${this.age}`;
    } else {
      return 'cannot change age';
    }
  }
}

const bob = new personInfo(30);

// console.log(bob.age);

console.log(bob.setAge('s'));
console.log(bob.getAge());
console.log(bob.setAge(31));
