#
# @lc app=leetcode.cn id=146 lang=python3
#
# [146] LRU 缓存
#
# https://leetcode.cn/problems/lru-cache/description/
#
# algorithms
# Medium (53.69%)
# Likes:    3079
# Dislikes: 0
# Total Accepted:    585.2K
# Total Submissions: 1.1M
# Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
#  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
#
# 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
#
# 实现 LRUCache 类：
#
#
#
#
# LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
# int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
# void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组
# key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
#
#
# 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
#
#
#
#
#
# 示例：
#
#
# 输入
# ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
# [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
# 输出
# [null, null, null, 1, null, -1, null, -1, 3, 4]
#
# 解释
# LRUCache lRUCache = new LRUCache(2);
# lRUCache.put(1, 1); // 缓存是 {1=1}
# lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
# lRUCache.get(1);    // 返回 1
# lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
# lRUCache.get(2);    // 返回 -1 (未找到)
# lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
# lRUCache.get(1);    // 返回 -1 (未找到)
# lRUCache.get(3);    // 返回 3
# lRUCache.get(4);    // 返回 4
#
#
#
#
# 提示：
#
#
# 1 <= capacity <= 3000
# 0 <= key <= 10000
# 0 <= value <= 10^5
# 最多调用 2 * 10^5 次 get 和 put
#
#
#


# @lc code=start
class LRUCache:
    class ListNode:
        def __init__(self, val=None, key=None, prev=None, next=None):
            self.val = val
            self.key = key
            self.prev = prev
            self.next = next

    def __init__(self, capacity: int):
        self.hashMap = {}
        self.head = self.ListNode()
        self.tail = self.ListNode()
        self.head.next = self.tail
        self.tail.prev = self.head
        self.capacity = capacity
        self.count = 0

    def move_to_head(self, head, node):
        node.prev.next = node.next
        node.next.prev = node.prev
        node.next = head.next
        node.prev = head
        node.next.prev = node
        head.next = node

    def get(self, key: int) -> int:
        if key in self.hashMap:
            self.move_to_head(self.head, self.hashMap[key])
            return self.hashMap[key].val
        else:
            return -1

    def del_node(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev
        del self.hashMap[node.key]

    def insert_new(self, node):
        self.head.next.prev = node
        node.prev = self.head
        node.next = self.head.next
        self.head.next = node

    def put(self, key: int, value: int) -> None:
        if key in self.hashMap:
            self.hashMap[key].val = value
            self.move_to_head(self.head, self.hashMap[key])
            return
        if self.count >= self.capacity:
            self.del_node(self.tail.prev)
            new_node = self.ListNode(val=value, key=key)
            self.insert_new(new_node)
            self.hashMap[key] = new_node
        else:
            new_node = self.ListNode(val=value, key=key)
            self.insert_new(new_node)
            self.hashMap[key] = new_node
            self.count += 1


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
# @lc code=end
