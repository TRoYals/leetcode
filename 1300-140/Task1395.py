from typing import List


class Solution:
    def numTeams(self, rating: List[int]) -> int:
        output = 0
        for i in range(len(rating)-2):
            # 找中间值开始遍历
            leftless = 0
            leftmore = 0
            rightless = 0
            rightmore = 0
            for j in range(i+1):
                if rating[j] < rating[i+1]:
                    leftless += 1
                if rating[j] > rating[i+1]:
                    leftmore += 1
            for k in range(i+2, len(rating)):
                if rating[k] < rating[i+1]:
                    rightless += 1
                if rating[k] > rating[i+1]:
                    rightmore += 1
            output += leftless*rightmore + leftmore*rightless
        return output


test = Solution()
print(test.numTeams([2, 5, 3, 4, 1]))
