// 3. 정의한 User 모델을 import하세요.
const User = require('./models/User');
const mongoose = require('mongoose');

const express = require('express');
const server = express();

async function test() {
  // 데이터를 임의로 수정 시 오답 처리 될 수 있습니다.
  // 데이터 추가는 자유롭게 할 수 있습니다.
  await User.create([
    { name: 'Elice', email: 'rabbit@elicer.com' },
    { name: 'Cheshire', email: 'cat@elicer.com' },
  ]);
  const users = await User.find({});
  return users;
}

server.listen(8080, err => {
  {
    if (err) {
      console.log('server listen error', err);
    } else {
      console.log('start the server successfully');

      // 1. `mongoose.connect()`를 사용해서 MongoDB에 연결하세요. 이때 성공적으로 연결되면 console에 메시지를 출력하고, 에러가 발생하면 에러메시지를 console에 출력하세요.
      // 굳이 try-catch 안하고, 바로 err를 넣어서 처리가 가능하다.
      // 콜백함수여서 await 안써도 된다.
      mongoose.connect('mongodb://localhost:27017', err => {
        if (err) {
          console.log(err);
        } else {
          console.log(`connected to database successfully`);
        }
      });

      // 아래는 데이터를 생성하고 검색하는 함수를 테스트하는 코드입니다.
      test()
        .then(users => {
          console.log('---테스트 결과---');
          console.log(users);
          console.log('---------------');
          return;
        })
        .catch(err => {
          console.error('에러가 발생했습니다.', err);
          return;
        })
        .finally(() => {
          process.exit();
        });
    }
  }
});
