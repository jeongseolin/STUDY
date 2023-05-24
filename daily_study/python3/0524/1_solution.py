# 옹알이
# 처음 풀이 방법
def solution(babbling):
    speaking = ["aya", "ye", "woo", "ma"]
    count = 0

    for word in speaking:
        for word in babbling:
            count += 1
    return count
# ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"] 단어를 합쳤을때도 가능한 방법 찾아야함

# 최종 풀이 방법
def solution(babbling):
    answer = 0
    for i in babbling:
        if "aya" in i:
            i = i.replace("aya", ".")
        if "ye" in i:
            i = i.replace("ye", ".")
        if "woo" in i:
            i = i.replace("woo", ".")
        if "ma" in i:
            i = i.replace("ma", ".")
        i = i.replace(".", "")
        if not i:
            answer += 1
    return answer
# 입력값인 babbling 리스트를 순회하면서 발음 문자열을 확인하고 
# 해당 발음을 '.'으로 대체한 후, 남은 문자열을 제거하고, 
# 마지막에 발음이 모두 제거된 경우에만 answer를 증가시키는 방식으로 동작