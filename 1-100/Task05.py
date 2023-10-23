# 5. Longest Palindromic Substring

class Solution:
    def longestPalindrome(self, s: str) -> str:
        # palindrome has two kinds, one is abba like, the other is abba like . we need to distinguish that
        dir = {}
        for i in range(len(s)-1):

            # type 1
            if s[i] == s[i+1]:
                j = 0
                while i-j-1 >= 0 and i+j+2 < len(s):
                    if s[i-j-1] == s[i+j+2]:
                        j += 1

                    else:
                        break
                word = s[i-j:i+j+2]
                dir[word] = len(word)
            # type2
            if i-1 >= 0:
                if s[i-1] == s[i+1]:
                    j = 0
                    while i-j-2 >= 0 and i+j+2 < len(s):  # 保证不越界
                        if s[i-j-2] == s[i+j+2]:
                            j += 1
                        else:
                            break
                    word = s[i-j-1:i+j+2]
                    dir[word] = len(word)
        print(dir)
        if len(dir) == 0:
            return s[0]

        for key, value in dir.items():
            if value == max(dir.values()):
                return key


test = Solution()
print(test.longestPalindrome("abba"))
print(test.longestPalindrome(
    "iptmykvjanwiihepqhzupneckpzomgvzmyoybzfynybpfybngttozprjbupciuinpzryritfmyxyppxigitnemanreexcpwscvcwddnfjswgprabdggbgcillisyoskdodzlpbltefiz"))
