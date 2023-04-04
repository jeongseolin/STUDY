// date와의 시간 차를 상대 시간으로 표시합니다.
const TimeMap = (() => { // 초(s) 기준으로 계산
  let min = 60;
  let hour = min * 60;
  let day = hour * 24;
  let week = day * 7;
  let month = week * 4;
  let year = month * 12;
  return { min, hour, day, week, month, year}
})()

const TimeTextMap = {
  [TimeMap.min] : "분", 
  [TimeMap.hour] : "시간", 
  [TimeMap.day] : "일", 
  [TimeMap.week] : "주", 
  [TimeMap.month] : "개월", 
  [TimeMap.year] : "년", 
}

function createTimeText(time, standard, suffix) { // 출력내용
  return `${Math.floor(time / standard)}${suffix} 전`
}

const RelativeTime = {
diff: (date) => { // 현재시간과 주어진 데이터 시간의 차이 
  const seconds = (new Date() - date) / 1000 // 1000 = 1초
  return Object
      .entries(TimeMap)
      .reduce((text, [time, value]) => {
          // time : min, value : 60
          // seconds : 80
          if (seconds >= value)
              return createTimeText(seconds, value, TimeTextMap[value]) // 80,60,"분"
          return text
      }, '방금 전') // 시작점 '방금 전'
},
};

export default RelativeTime;
