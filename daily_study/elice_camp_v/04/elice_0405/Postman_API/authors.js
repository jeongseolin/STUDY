module.exports = (req, res, next) => {
  const author = req.get("author");
  
  if (!author) {
      next(new Error("No Author"));
      return;
  }
  
  // admin 확인하기
  // author 헤더 값이 “admin” 인 경우, password 헤더값을 확인하여 password 헤더값이 “1234” 가 아닌경우 “Invalid Admin Password” 라는 오류를 오류처리 미들웨어로 전달하도록 합니다.
  if (author === "admin") {
      const password = req.get("password");
      if (password !== "1234") {
          next(new Error("Invalid Admin Password"));
          return;
      }
  }
  
  next();
}