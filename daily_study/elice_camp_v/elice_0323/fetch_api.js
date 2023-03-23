//randomuser.me 라는 API는 무작위로 생성된 사용자의 프로필 이미지를 포함해 디테일한 정보까지 어디서든 요청 가능합니다.

document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
  fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => {
      // 뭔가를 한다
      console.log(data);
      const user = data.results;

      // 사용자 정보를 요청합니다.
      let output = '<h2><center>사용자 정보 받기</center></h2>';

      user.forEach(function (lists) {
        output += `
            <div class="container">
                <div class="card mt-4 bg-light">
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-primary"><h2>Name: ${lists.name.first}</h2></li>
                        <li class="list-group-item"><img src="${lists.picture.large}"></li>
                        <li class="list-group-item">Phone Number: ${lists.cell}</li>
                        <li class="list-group-item">DOB: ${lists.dob.date}</li>
                        <li class="list-group-item">Age: ${lists.dob.age}</li>
                        <li class="list-group-item">Email ID: ${lists.email}</li>
                        <li class="list-group-item">City: ${lists.location.city}</li>
                        <li class="list-group-item">Country: ${lists.location.country}</li>

                        <li class="list-group-item">PostCode: ${lists.location.postcode}</li>

                    </ul>
                </div>
            </div> `;
      });

      document.getElementById('output').innerHTML = output;
    });
}