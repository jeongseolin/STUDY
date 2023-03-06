# 문제 : 실수로 삭제한 파일 복원하기
#엘리스 토끼와 모자장수는 random_quotes 라는 과학과 정치에 관한 명언을 출력해주는 프로그램을 만들고 있습니다.

#그런데 모자장수가 실수로 위 프로그램의 모든 파일을 삭제하고 말았습니다.
#다행히도 저장소에는 기록이 남아있어 엘리스 토끼가 돌아오기 전에 복구를 하려고 합니다.

#아래 지시사항을 참고하여 Git 명령어를 작성하고 삭제된 파일을 복구하세요.


# Git 명령을 채점하기 위한 편집창입니다.
# 문제를 풀기 위해 필요한 명령을 아래에 입력하세요.
# 여러 개의 명령은 한 줄에 하나씩 입력하세요.
cd random_quotes

# 지시사항 1번을 참고하여 코드를 작성하세요.
git log


# 지시사항 2번을 참고하여 코드를 작성하세요.
# log로 조회해서 commit ID 입력하기!!
git reset --hard "9d46f1514b36dad6947508ffeb5754330ffb2c2b"

