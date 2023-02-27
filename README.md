# javascript_study
## 서린아 사랑해

### VS코드 
### 터미널 명령어
~ : 제일 위에 있는 애 “root폴더”
<br>cd : 들어가고 싶은 폴더
<br>pwd : 현재 터미널에 존재하고 있는 절대위치
<br>. : 현재 폴더
<br>.. : 이전 폴더

Sh 쉘 : 터미널에 보이는 것들, 돌아가는 것들의 바탕
<br>Sudo : root폴더 권한으로, 관리자 권한으로 실행시키는 것
<br>bin파일 폴더 - cd, cat … 많은 명령어들이 들어가 있음
- cp(copy), 
- rm(delete 파일 삭제), 
- kill(프로세스 종료), 
- chmod(파일에 권한 부여, 명령어 관리), 
- echo(명령어 터미널 출력) 
   <br>echo test > test.js(만들어라), 
   <br>echo test2 > test.js(없으면 만들고, 있으면 덮어써라),   
   <br>echo test2 >> test.js(맨뒤에 붙여넣기)
- vi tests.js
   <br>:p! (! - 권한있는 사람이 강제적으로)
   <br>:wq(저장하고 나가기)

rwx r-x r-x
파일의 소유자 / root의 권한을 가진 그룹 / 나머지 사용자(소유자도 아니고, 그룹도 아닌)
- r 읽기 권한 w 쓰기 권한 x 실행 권한

* Hostname : DNS / 프로토콜 
  
### 문자열의 개별 문자가 'l'이면
for (var i = 0; i < string.length; i++) { 
   <br> if (string[i] !== search) continue; count++; }

