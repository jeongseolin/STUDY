
const RotationEncryptor = {
  message: "",
  rotation: 0,

  encrypt: function () {

      return this.message
        .split("")
        .map(c => String.fromCharCode(
            c.charCodeAt(0) + this.rotation
        ))
        .join("");

    // this.message의 각 문자 character code에 rotation 값을 더해 새로운 문자열을 만들어 반환합니다.
    // ex) message - "abcde", rotation - 1 => "bcdef"

    // let splittedArray = this.message.split('') // ["a","b","c","d","e"]
    // let mappedArray = splittedArray.map(c => String.fromCharCde(c.charCodeAt(0)+this.rotation)) // ["b","c","d","e"]]
    // let joinedString = mappedArray.join('');
    // return joinedString;

  },

  setMessage: function (message) {
    // this.message를 세팅합니다.
    this.message = message;
  },

  setRotation: function (rotation) {
    // this.rotation을 세팅합니다.
    this.rotation = rotation;
  },
};

export default RotationEncryptor;
