const wait = (ms) => {
  return new Promise((resolve, reject) => {
    // setTimeout을 사용하여, ms를 기다리도록 구현해보세요.
    setTimeout(() => {
        resolve();
    }, ms)
    //setTimeout(resolve, ms);
  });
};

//const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export default wait