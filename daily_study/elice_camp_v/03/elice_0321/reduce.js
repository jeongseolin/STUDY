const userLeft = false;
const userEnteredChat = false;

const posts = [
  { title: 'Post 1', body: '첫번째 게시글입니다.' },
  { title: 'Post 2', body: '두번째 게시글입니다.' },
];

const canvas = document.getElementById('myCanvas');
// 2d모드의 그리기 객체를 통해 canvas에 그림을 그릴 수 있다.
const ctx = canvas.getContext('2d');
// 이미지 객체 생성
const img = new Image();
// 이미지 소스 설정
img.src = './image/m1.jpg';
// 이미지 로드이벤트- 콜백함수 등록

function usePromise() {
  return new Promise(function (resolve, reject) {
    if (userLeft) {
      //사용자가 웹 페이지를 떠났을 때
      reject({
        name: 'user left',
        message: ':(',
      });
      document.write('user left:(');
    } else if (userEnteredChat) {
      //사용자가 채팅 페이지에 접속했을 때
      resolve({
        name: 'the user has entered the chat',
        message: 'entertain the user with memes',
      });
      img.onload = function () {
        ctx.drawImage(img, 100, 100);
      };
      document.write('entertain the user with memes');
    } else {
      //정상적으로 메인페이지에 접속이 된 경우
      //메인페이지 게시글(posts)의 제목(title)과 내용(body)를 html element로 나타냅니다. 이 때 setTimeout()으로 비동기처리합니다.
      // resolve('subscribe to see more memes');
      setTimeout(() => {
        resolve('subscribe to see more memes');
        let output = '';
        posts.forEach((post, index) => {
          output = output + `<li>${post.title}<br> 내용: ${post.body} </li> `;
        });
        document.body.innerHTML = output;
      }, 1000);
    }
  });
}

usePromise()
  .then(message => {
    console.log('success:' + message);
  })
  .catch(error => {
    console.log(error.name + '' + error.message);
  });