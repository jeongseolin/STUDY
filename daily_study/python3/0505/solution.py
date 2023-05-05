def solution(n):
    answer = []
    for i in range(1, int(n ** 0.5)+1): # n의 제곱근보다 작거나 같은 모든 자연수 범위를 나타냅니다. 이는 소수를 구하는 데에 매우 유용한 방법 중 하나입니다.
        if n % i == 0:
            answer.append(i)
            if i != n // i:
                answer.append(n // i)
    return len(answer)