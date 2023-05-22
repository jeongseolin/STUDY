# 피보나치 수
# 1. 재귀함수
def solution(n):
    answer = 0
    if n < 2:
        return n
    else:
        answer = solution(n-1) + solution(n-2) % 1234567
    return answer
# 런타임 에러, 시간 초과

# 2. 메모이제이션
def solution(n):
    answer = [0,1]
    for i in range(2,n+1):
        answer.append((answer[i-1] + answer[i-2]) % 1234567)
    
    return answer[-1]