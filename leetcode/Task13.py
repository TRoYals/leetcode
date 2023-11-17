class Solution:
    @staticmethod
    def romanToInt(s: str) -> int:
        RomanNum = {'I': 1, 'V': 5, 'X': 10,
                    'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        answer = 0
        for i in range(len(s)-1):
            if RomanNum[s[i]] >= RomanNum[s[i+1]]:
                answer += RomanNum[s[i]]
            else:
                answer -= RomanNum[s[i]]
        answer += RomanNum[s[len(s)-1]]
        return answer


s = "VI"
print(Solution.romanToInt(s))
