## Git 설치 및 저장소 생성
1. git --version : git 설치 확인
2. git config --global user.name "이름"
   <br>git config --global user.email "이메일"
3. git config --list : 설정 정보 확인
4. git init : git repository로 설정
5. ls -al : 폴더 확인 (.git 파일이 생성)
   
## Git 저장
1. git add . : 모든 것을 저장하겠다.
   <br>git add test.js : 특정 파일을 저장하겠다.
2. git commit -m "메시지(반영 상세 내용)"
   <br>git commit --amend : 오타, 누락사항 변경 
   <br>git log : 저장소 반영 내용 확인
3. git push : 강제 업로드

## Git 관리 상태 확인
1. git status : 준비상태에 있는 파일 확인
2. git log : 커밋된 파일 확인
  - 대표적인 log 옵션들 > pdf파일 추가 확인하기! **
  - git log --oneline
  - git log --pretty=oneline
  - git log --all
  - git log --graph
3. git diff : 커밋된 파일 중 변경된 사항을 비교할 때

## Git Branch
- Branch : 독립적으로 작업을 하기 위한 개념
   - main 배포할 수 있는 수준의 안정적 branch
   - topic 단위 작업의 branch
1. git branch "이름" : branch 생성
2. git checkout "이름" : branch 전환

## Git Merge 병합  
(1) fast-forward(변경된 것없이 새로운 내용만 추가 됫을 경우)
제일 main branch로 이동,
1. git merge "병합할 branch 이름"

(2) 갈라지는 branch(각각 따로 동시에 수정되는 경우)
1. git log --graph --all
main branch로 이동,
2. git merge "병합할 branch 이름"

## Git Branch 삭제
사용을 마친 branch는 삭제할 수 있다.
1. git branch -d "삭제할 branch 이름"

## Git Merge conflict 충돌
병합을 하는 두개의 branch에서 같은 파일을 변경했을 때 생김
- Master branch의 잦은 수정을 방지한다.