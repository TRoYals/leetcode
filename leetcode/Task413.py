from typing import List


class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return 0
        # output = 0
        # for i in range(0, len(nums)-2):
        #     if nums[i+2]+nums[i] == 2 * nums[i+1]:
        #         output += 1
        # return output
        # 关键是怎么找到符合条件的子集和
        count = 0
        total = 0
        for i in range(1, len(nums)-1):
            if nums[i-1]+nums[i+1] == 2*nums[i]:
                count += 1
            else:
                total += count*(count+1)/2
                count = 0
        total += count*(count+1)/2
        return int(total)


test = Solution()
print(test.numberOfArithmeticSlices([1, 2]))
