# 숫자 문자열과 영단어
def solution(s):
    num_array = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for i in range(len(num_array)):
        s = s.replace(num_array[i], str(i)) # num_array[i]를 str(i)로 대체

    answer = int(s) # 문자열을 정수로 반환
    return answer