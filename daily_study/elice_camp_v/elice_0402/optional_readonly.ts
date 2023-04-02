// 지시사항에 주어진 타입의 프로퍼티들을 갖도록 Interface를 정의하세요.
interface User {
  name: string,
  id: string | number,
  gender?: string, // readonly '?' 붙여야함.
  accountNumber: number
}


// 정의한 인터페이스를 할당한 객체를 생성하여 테스트해보세요.
let user: User = {
name: "Calvin",
id: 23,
accountNumber: 20,
};

// 채점을 위한 코드입니다. 수정하지 마세요.
export { User };
