// index.js
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();


// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// 1. express 미들웨어를 사용하세요.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: '사용자 등록',
    members // Members.js 안에 내용을 사용할 거다.
  })
);

// Set static folder 생성 -> 정적으로 라우터에 해당하는 페이지가 작동합니다.
app.use(express.static(path.join(__dirname, 'public')));

//2. app.use()를 사용해서 사용자 api (.`/routes/api/members`) 를 라우팅하세요.
app.use('/api/members', require('./routes/api/members')); // views에 handlebars에 api/members 라고 되어 있음.


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));





// members.js
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

const idFilter = req => member => member.id === parseInt(req.params.id);

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json(members.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// 1. post()를 사용해서 사용자 정보 추가하세요.
router.post('/', (req, res) => { 
  const newMember = { 
    // 임시 id: uuid.v4()를 사용해서 임시 id를 저장합니다.
    id: uuid.v4(), 
    name: req.body.name,
    email: req.body.email,
    status: 'active' // 스키마랑 형식이 동일해야함.
  };

  // 제대로 요청되어 newMember에 저장되었는지 확인
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  //2. push()를 사용해서 Members.js에 newMember를 추가하세요.
  members.push(newMember);
 
  // 사용자 추가하기 버튼을 클릭하면 전체 사용자 정보를 json 파일 형태로 불러옵니다.
  res.json(members);
});

// 사용자 업데이트
router.put('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    members.forEach((member, i) => {
      if (idFilter(req)(member)) {

        const updMember = {...member, ...req.body};
        members[i] = updMember
        res.json({ msg: 'Member updated', updMember });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// 사용자 삭제하기
router.delete('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json({
      msg: 'Member deleted',
      members: members.filter(member => !idFilter(req)(member))
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
