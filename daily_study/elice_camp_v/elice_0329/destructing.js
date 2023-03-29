const duck = {
  name: "duck",
  sound: "quack",
};

const { name, sound } = duck; // 키값과 같이 사용해야 함
// const { name:newName, sound:newSound } 키값을 변경하고 싶을때 : 사용해서 변경할 수 있다.

console.log("name", name);
console.log("sound", sound);


const animals = ["duck", "cat", "bear"];

const [ first, second, third ] = animals;
// const [ one, two, three ] 여기서는 그냥 변경하고, 아래 콘솔로그에서 똑같이 사용하면 됨.

console.log("first", first);
console.log("second", second);
console.log("third", third);