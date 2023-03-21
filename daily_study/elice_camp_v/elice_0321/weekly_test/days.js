// 처음 만난 날
const date1 = new Date(2020, 6, 1);

// 오늘 날짜
const date2 = new Date(2021, 11, 9);

//경과 일수 계산하기
//getTime() 메소드는 '1970년 1월1 일 00:00:00 UTC'로부터 주어진 시간 사이의 경과시간(밀리초)를 리턴합니다.
//즉, '1970년 1월1 일 00:00:00 UTC'의 getTime() 값은 0입니다.
//  date2.getTime() - date1.getTime()와 elapsedMSec를 사용해서 두 날짜 사이의 경과 밀리초를 구하고 일수를 구하세요.
const Days = {
  elapsedMSec: null,
  numDay: function () {
    const elapsedMSec = date2.getTime() - date1.getTime();
    const elapsedDays = elapsedMSec / (1000 * 60 * 60 * 24);

    return elapsedDays;
  },
};

export default Days;
