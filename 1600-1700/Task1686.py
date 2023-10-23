# from curses import beep
# from re import I, L
# from typing import List


# class Solution:
#     def stoneGameVI(self, aliceValues: List[int], bobValues: List[int]) -> int:
#         valuediff = [aliceValues[i]-bobValues[i]
#                      for i in range(len(aliceValues))]
#         alice = 0
#         bob = 0
#         stone = 0
#         while True:
#             max = 0
#             count = 0
#             for i in range(len(valuediff)):
#                 if abs(valuediff[i]) > max:
#                     max = abs(valuediff[i])
#                     count = i
#             valuediff[count] = 0
#             alice += aliceValues[count]
#             stone += 1
#             if stone == len(aliceValues):
#                 break
#             max = 0
#             count = 0
#             for i in range(len(valuediff)):
#                 if abs(valuediff[i]) > max:
#                     max = abs(valuediff[i])
#                     count = i
#             valuediff[count] = 0
#             bob += bobValues[count]
#             stone += 1
#             if stone == len(aliceValues):
#                 break
#         return [alice, bob]
#         if alice-bob > 0:
#             return 1
#         if alice-bob < 0:
#             return -1
#         else:
#             return 0


# test = Solution()
# print(test.stoneGameVI([9, 8, 3, 8], [10, 6, 9, 5]))
class Solution:
    def stoneGameVI(self, aliceValues: List[int], bobValues: List[int]) -> int:
        combined_values = sorted([aliceValues[i] + bobValues[i]
                                 for i in range(len(aliceValues))], reverse=True)
        i = 0
        j = 1
        alice = 0
        bob = 0
        while i < len(combined_values):
            alice += combined_values[i]
            i += 2
        while j < len(combined_values):
            bob += combined_values[j]
            j += 2

        score = alice - bob
        imbalance = sum(bobValues) - sum(aliceValues)

        if score > imbalance:
            return 1
        elif score < imbalance:
            return -1
        else:
            return 0
