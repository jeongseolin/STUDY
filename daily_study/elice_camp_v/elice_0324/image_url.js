import "babel-polyfill";

async function fetchImage() {
  //1. fetch() 메서드를 호출하여 구글에 검색된 햄버거 이미지를 가져오고 변수(response)에 저장하세요. 이때 await을 사용하세요
  let response = await fetch(
    "https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?k=20&m=1157515115&s=612x612&w=0&h=1-tuF1ovimw3DuivpApekSjJXN5-vc97-qBY5EBOUts="
  );

  const error = false;

  if (!response.ok || error) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    document.write("here's the image");
    return await response.blob();
  }
}
//2. then() 블록을 사용하여 promise가 성공적인 실행에 응답하고 에러가 발생했을때 catch를 하는 코드를 작성하세요.
// then() 블록을 사용하여 promise가 성공적인 실행에 응답합니다.
// 반환된 응답을 받아 blob()을 실행하여 blob으로 변환합니다.
fetchImage()
  .then((blob) => { //then()의 인자로 blob을 받습니다.
    // Blob 객체를 가리키는 객체 URL을 생성
    let objectURL = URL.createObjectURL(blob);
    // blob(이미지)을 표시할 <img> 요소를 만듭니다.
    //then block 내에 실행코드를 넣으세요. 이미지를 변환해서 <img>의 src를 객체 URL로 설정하여 이미지에 html에 표시되도록 합니다.
    let image = document.createElement("img");
    // <img>의 src를 객체 URL로 설정하여 이미지에 표시되도록 합니다.
    image.src = objectURL;

    // ADOM에 <img> 요소 추가
    document.body.appendChild(image);
  })
  .catch((e) => console.log(e));




