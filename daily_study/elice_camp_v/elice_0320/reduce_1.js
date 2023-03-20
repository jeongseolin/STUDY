let shoppingCart = [
  {
    product: "자전거",
    qty: 1,
    price: 849.0,
  },
  {
    product: "에어팟",
    qty: 1,
    price: 249.0,
  },
  {
    product: "운동화",
    qty: 1,
    price: 90.99,
  },
  {
    product: "스웨터",
    qty: 2,
    price: 50.99,
  },
  {
    product: "양말",
    qty: 5,
    price: 5.99,
  },
];

//1. reduce()를 사용해서 구입할 제품의 총금액을 반환하는 함수를 작성해서 console.log로 출력하세요.
let total = shoppingCart.reduce(function (acc, curr) {
  return acc + curr.qty * curr.price;
}, 0);

console.log(total);
