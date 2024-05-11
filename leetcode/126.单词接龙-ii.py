#
# @lc app=leetcode.cn id=126 lang=python3
#
# [126] 单词接龙 II
#
# https://leetcode.cn/problems/word-ladder-ii/description/
#
# algorithms
# Hard (36.99%)
# Likes:    709
# Dislikes: 0
# Total Accepted:    59.2K
# Total Submissions: 160.4K
# Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
#
# 按字典 wordList 完成从单词 beginWord 到单词 endWord 转化，一个表示此过程的 转换序列 是形式上像 beginWord ->
# s1 -> s2 -> ... -> sk 这样的单词序列，并满足：
#
#
#
#
# 每对相邻的单词之间仅有单个字母不同。
# 转换过程中的每个单词 si（1 <= i <= k）必须是字典 wordList 中的单词。注意，beginWord 不必是字典 wordList
# 中的单词。
# sk == endWord
#
#
# 给你两个单词 beginWord 和 endWord ，以及一个字典 wordList 。请你找出并返回所有从 beginWord 到 endWord 的
# 最短转换序列 ，如果不存在这样的转换序列，返回一个空列表。每个序列都应该以单词列表 [beginWord, s1, s2, ..., sk]
# 的形式返回。
#
#
#
# 示例 1：
#
#
# 输入：beginWord = "hit", endWord = "cog", wordList =
# ["hot","dot","dog","lot","log","cog"]
# 输出：[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
# 解释：存在 2 种最短的转换序列：
# "hit" -> "hot" -> "dot" -> "dog" -> "cog"
# "hit" -> "hot" -> "lot" -> "log" -> "cog"
#
#
# 示例 2：
#
#
# 输入：beginWord = "hit", endWord = "cog", wordList =
# ["hot","dot","dog","lot","log"]
# 输出：[]
# 解释：endWord "cog" 不在字典 wordList 中，所以不存在符合要求的转换序列。
#
#
#
#
# 提示：
#
#
# 1 <= beginWord.length <= 5
# endWord.length == beginWord.length
# 1 <= wordList.length <= 500
# wordList[i].length == beginWord.length
# beginWord、endWord 和 wordList[i] 由小写英文字母组成
# beginWord != endWord
# wordList 中的所有单词 互不相同
#
#
#
#
#


# @lc code=start
class Solution:
    def findLadders(
        self, beginWord: str, endWord: str, wordList: List[str]
    ) -> List[List[str]]:
        if endWord not in wordList:
            return []

        def diff_word(word1, word2):
            count = 0
            for i in range(len(word1)):
                if word1[i] != word2[i]:
                    count += 1
            return count

        wordSet = set(wordList)
        stack = []
        queue = [beginWord]
        found = False
        while len(queue) != 0 and not found:
            n_length = len(queue)
            curr_arr = []
            for i in range(n_length):
                curr = queue.pop(0)
                curr_arr.append(curr)
                if curr == endWord:
                    found = True
                    break
                next_words = [word for word in wordSet if diff_word(curr, word) == 1]
                queue.extend(next_words)
                wordSet.difference_update(next_words)  # 从 wordSet 中移除已经遍历过的词
            stack.append(curr_arr)
        stack = stack[1:-1]
        return_arr = []

        def clean_stack(stack, curr_arr, cur_val, depth):
            if diff_word(cur_val, endWord) == 1:
                return_arr.append([*curr_arr, endWord])
                return
            if len(stack) == depth:
                return
            curr = stack[depth]
            for i in range(len(curr)):
                if diff_word(cur_val, curr[i]) == 1:
                    curr_arr.append(curr[i])
                    clean_stack(stack, curr_arr, curr[i], depth + 1)
                    curr_arr.pop()

        clean_stack(stack, [beginWord], beginWord, 0)
        return return_arr


# @lc code=end
