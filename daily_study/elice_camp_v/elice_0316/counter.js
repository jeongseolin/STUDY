const Counter = () => {
  // Counter 클로저를 작성하세요.
  let count = 0;

  function getCount() {
      return count;
  }
  function increase() {
      count += 1;
  }
  function decrease() {
      count -= 1;
  }
  return {getCount, increase, decrease};
};

export default Counter;