// 빈 사각형 그리기

class Square {
  class Square {
    private length: number;
  
    constructor(length: number = 0) {
      this.length = length;
    }
  
    public getLength(): number {
      return this.length;
    }
  
    public setLength(length: number): void {
      this.length = length;
    }
  
    public draw(): void {
      if (this.length === 0) {
        console.log("사각형의 변의 길이가 설정되지 않았습니다.");
        return;
      }
  
      let result = "";
  
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (i === 0 || i === this.length - 1 || j === 0 || j === this.length - 1) {
            result += "* ";
          } else {
            result += "  ";
          }
        }
        result += "\n";
      }
  
      console.log(result);
    }
  }
  
  export { Square };
  
