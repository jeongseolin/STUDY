# 문자열 내 마음대로 정렬하기
def solution(strings, n):
    strings.sort()  # 먼저 사전순으로 정렬합니다.
    strings.sort(key=lambda x: x[n])  # n번째 문자를 기준으로 정렬합니다.
    return strings

# 람다 함수
(lambda x,y: x + y)(10, 20) # 답 : 30

# 더 간단 풀이법
def solution(strings, n):
    return sorted(strings, key=lambda x: (x[n], x)) 
# 첫 번째 요소는 n번째 문자를 기준으로 정렬하고, 
# 두 번째 요소는 사전순으로 정렬하기 위해 자기 자신인 문자열 x를 사용합니다.