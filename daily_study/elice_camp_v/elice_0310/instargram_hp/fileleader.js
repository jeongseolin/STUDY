import close from './assets/close_icon.svg';
import media from './assets/media_icon.svg';
import arrow from './assets/arrow_back_icon.svg';

const modal = `
                <div class="modal__close">
                  <img
                  width="22px"
                  height="22px"
                  src=${close}
                  alt="close_icon_logo"
                  />
                </div>
                <div class="modal__card">
                  <div class="modal__header">
                    <div class="modal__back">
                      <img width="32px" height="24px" src=${arrow} alt="arrow_back_icon" />
                    </div>
                    <h2>새 게시물 만들기</h2>
                    <p>공유하기</p>
                  </div>
                  <div class="modal__main">
                    <img src=${media} alt="media_icon" />
                    <h3>사진과 동영상을 업로드 해보세요.</h3>
                    <label for="file">
                      <p>컴퓨터에서 선택</p>
                    </label>
                    <input type="file" name="file" id="file" />
                  </div>
                </div>
              `;

function createPost(img) { // 이미지를 받아서 이미지를 넣어주고, 템플릿을 리턴하는 구조로 되어있음
  return `
          <div class="modal__post">
            <img width="478px" height="478px" src=${img} alt="image" />
            <div class="modal__write">
              <textarea placeholder="문구 입력..." autofocus></textarea>
            </div>
          </div>
        `;
}

document.querySelector('#add-post').addEventListener('click', createModal);

function createModal() {
  const modalEl = document.createElement('div');
  modalEl.setAttribute('class', 'modal__layout');
  modalEl.innerHTML = modal;

  document.querySelector('body').prepend(modalEl);

  document
    .querySelector('.modal__close')
    .addEventListener('click', function () {
      document.querySelector('body').removeChild(modalEl);
    });
    
  // 지시사항에 맞춰 코드를 작성해주세요.
  const fileEl = document.querySelector("#file"); //id가 file인 엘리먼트를 가져온다.
  fileEl.addEventListener("input", function(){ //데이터가 들어왔을때 이벤트가 발생
      const reader = new FileReader(); //FileReader객체를 이용해서 만든다.

      reader.readAsDataURL(fileEl.files[0]); 

      reader.onload = function(){ //완전히 읽어지고 나면, onload 함수 실행, 에러가 나면 아래 error 함수 실행
          const imageBase64 = reader.result; //result 프로퍼티로 접근한다.
            //각 요소의 클래스 이름 변경
          document.querySelector(".modal__card").setAttribute("class", "modal__card write--post");
          document.querySelector(".modal__main").setAttribute("class", "modal__main write--post");
            //아래 요소들을 보이도록 바꿔야 한다. (뒤로 가기 버튼, 공유 하기 버튼)
          const backBtn = document.querySelector(".modal__back > img");
          const shareBtn = document.querySelector(".modal__header > p");

          backBtn.style.visibility = "visible"; //hidden -> visible로 변경
          shareBtn.style.visibility = "visible";

          document.querySelector(".modal__main").innerHTML = createPost(imageBase64); //createPost함수를 사용하여 이미지(imageBase64)를 넣어준다.

          backBtn.addEventListener("click", function(){ //뒤로 가기 버튼을 눌렀을 때
              document.body.removeChild(modalEl); //현재 모달창을 닫고
              createModal(); //새로운 모달창을 다시 열게 한다. 재귀함수 createModal 사용
          });
      };
      reader.error = function(error){ 
          alert("Error", error); //에러 메시지 출력
          document.body.removeChild(modalEl); //에러가 난 모달창을 닫는다.
      };
  });
}
