## 원격 저장소 url로 받아오기
- git clone (원격저장소의 주소)

## 원격 저장소 추가/연결
- git remote add origin (주소)

## 원격 저장소 살펴보기
- git remote show origin

## 원격 저장소 이름 변경
- git remote rename origin (변경할 이름)

## 원격 저장소 삭제
- git remote rm (삭제할 이름)

## 원격 저장소 동기화
- pull : 원격 저장소에서 데이터 가져오기 + 병합(Merge)
- fetch : 원격 저장소에서 데이터 가져오기

1. git pull : 원격 저장소에서 데이터를 가져와, 로컬 데이터와 병합
2. git fetch를 한 경우, 
  <br>git merge origin/master 로 병합을 추가로 해줘야 한다.
3. git push origin master
    <br>다른 사람이 먼저 push한 상태에서는 불가능.
    <br>병합을 한 후, 진행해야한다. 

## origin/master
git remote add origin (주소)
<br>= 원격저장소의 단축이름을 origin으로 지정한다는 의미

1. git remote -v :  지정한 저장소의 이름과 주소 확인 

## 예시
- jessy는 원격저장소에 있는 내용을 로컬저장소로 받아와 어떤 부분이 바뀌고 추가되었는지 확인해 보려 합니다.
  <br>git fetch origin master
  <br>git merge origin/master
  <br>OR
  <br>git pull origin master

- 현재 진행되던 프로젝트를 친구와 같이 진행하기 위해 원격저장소를 만드려고 합니다. 원격 저장소의 주소는 ()이며, 현재 비어있는 상태입니다. 위 주소의 원격저장소에 로컬저장소의 내용을 push해 봅시다.
  <br>git remote add (저장소 생성 이름) (주소)
  <br>git push (저장소 생성 이름) master

- 다른사람이 push를 해서 충돌이 일어났다.
  <br>git log --graph : 현 상태를 확인하고
  <br>git diff : 어디를 수정해야하는지 확인하고
  <br>해당 파일을 수정한후
  <br>\cp -f modified.py app.py 명령어 입력 : modified를 app으로 복사해서 만들겠다.
  <br>app.py에서 겹친 부분을 수정한후
  <br>git add app.py
  <br>git commit -m "add"
  <br>git push origin master