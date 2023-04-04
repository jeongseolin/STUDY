const Counter = {
  count: 0,

  getCount: function () {
    return this.count;
  },

  resetCount: function () {
    this.count = 0;
  },

  incrementSync: function () {
// 1) 현재 시간 구하기
        const currentTime = Date.now(); 
// 2) while문을 활용해서 date.now()의 초 증가하기
        while (true) { 
            const now = Date.now(); // Date.now()를 계속 구해라.
            if (now - currentTime > 3000) break; // 3초가 넘었으면 while문 벗어나기
        }
// 3) 동기적으로 3초 뒤에 this.count 증가
        this.count++;
  },

  incrementAsync: function (callback) {
// 1) setTimeout() 함수 호출로 비동기적으로 this.count 증가
        setTimeout(() => {
            this.count++;
            callback();
        }, 3000)
  },
};

export default Counter;
