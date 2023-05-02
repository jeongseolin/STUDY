interface Doctor {
  name: string;
  age: number;
}
interface Engineer {
  name: string;
  skill: string;
}

// Docter 인터페이스와 Engineer 인터페이스를 합친 타입을 선언하세요.
type Prop = Doctor & Engineer;

// 함수의 매개변수 타입을 수정하세요.
function introduce(person: Prop) { // Doctor | Engineer가 아닌, 위에 합친 타입으로 해줘야 아래 오류가 안남.
  console.log(person.name); // 정상 동작
  console.log(person.age); // 타입 오류
  console.log(person.skill); // 타입 오류
}

// 채점을 위한 코드입니다. 수정하지 마세요.
export { introduce };