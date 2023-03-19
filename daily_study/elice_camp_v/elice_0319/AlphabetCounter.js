const AlphabetCounter = {
  sentence: "",
  alphabetMap: {},

  setSentence: function (sentence) {
    this.sentence = sentence;
    return this;
  },

  buildAlphabetMap: function () {
    // this.sentence 로부터 알파벳 맵을 만들어
    // this.alphabetMap에 저장하세요.
    this.alphabetMap = 
        this.sentence
            .trim() // 공백제거
            .toLowerCase() // 소문자변경
            .split("") // 배열화 (하나의 문자를 원소로 하는)
            .filter(c => c >= "a" && c <= "z") // 소문자판별 a~z사이
            .reduce((map, char) => {
                if (!map[char]) map[char] = 0 // 없다면 0으로 초기화를 해주세요
                map[char]++
                return map
            }, {}) // {}객체를 초기화
    return this;
  },

  buildResult: function () {
    // Object.entries()를 활용하여 [a: 1] [b: 2] 형태의 문자열을 만들어보세요.
    const resultString = 
        Object.entries(this.alphabetMap)
            .reduce((acc, [alphabet,freq]) => `${acc} [${alphabet}:${freq}]`,"")
            .trim() // 공백문자 제거
    return `결과는 : ${resultString} 입니다.`;
  },
};

export default AlphabetCounter;
