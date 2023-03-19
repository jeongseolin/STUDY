const Clock = {
  getCurrentTime: function (date) {
    // 현재 시간 문자열을 만들어 리턴하세요.
    // date가 Date 객체의 인스턴스가 아니라면 에러 메시지를 리턴하세요.

    if (!(date instanceof Date)) 
        return "현재 시간을 구할 수 없습니다.";

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return  `현재 시간은 ${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초 입니다.`


  },
};

export default Clock;
