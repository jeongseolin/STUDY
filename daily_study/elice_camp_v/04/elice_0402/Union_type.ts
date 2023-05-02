// string과 number 두 타입이 허용될수 있게 union type을 선언해주세요
const printMessage = (message: number|string) => {
  console.log(message)  
}

printMessage(1234)
printMessage("hello")
