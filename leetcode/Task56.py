from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        while True:
            intervals = sorted(intervals, key=lambda x: x[0])
            if len(intervals) == 1:
                return intervals
            for i in range(0, len(intervals)-1):
                if intervals[i][1]-intervals[i][0]+intervals[i+1][1]-intervals[i+1][0] > intervals[i+1][1]-intervals[i][0] or intervals[i+1][0] == intervals[i][1]:
                    intervals.insert(
                        0, [intervals[i][0] if intervals[i][0] < intervals[i+1][0] else intervals[i+1][0], intervals[i+1][1] if intervals[i+1][1] > intervals[i][1] else intervals[i][1]])
                    del intervals[i+1]
                    del intervals[i+1]
                    break
                if i >= len(intervals)-2:
                    return intervals
        return intervals


test = Solution()
print(test.merge([[1, 4], [4, 5]]))
