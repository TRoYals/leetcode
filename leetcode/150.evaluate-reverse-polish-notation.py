#
# @lc app=leetcode id=150 lang=python3
#
# [150] Evaluate Reverse Polish Notation
#
from typing import List


# @lc code=start
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for i in range(len(tokens)):
            if tokens[i] not in ["+", "-", "*", "/"]:
                stack.append(int(tokens[i]))
            else:
                num1 = stack.pop()
                num2 = stack.pop()
                stack.append(self.str_calculate(num1, num2, tokens[i]))
        return stack[0]

    def str_calculate(self, num1: int, num2: int, token: str) -> int:
        if token == "+":
            return num1 + num2
        elif token == "-":
            return num2 - num1
        elif token == "*":
            return num1 * num2
        else:
            return int(num2 / num1)


# @lc code=end
print(Solution().evalRPN(["4", "13", "5", "/", "+"]))
