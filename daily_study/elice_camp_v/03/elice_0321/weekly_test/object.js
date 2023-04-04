// 지시사항에 따라 코드를 작성합니다.
const myProduct = {
  type: "냉장고", 
  model: "ABC-123",  
  year: 2020,
  getType: function() { 
      return this.type; 
  },
  getModel: function() { 
      return this.model; 
  },
  getYear: function() { 
      return this.year; 
  },
  changeType: function(type) { 
      this.type = type; 
      return this.type;
  },
  changeModel: function(model) { 
      this.model = model;
      return this.model;
  },
  changeYear: function(year) { 
      this.year = year;
      return this.year;
  }
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { obj: myProduct };
