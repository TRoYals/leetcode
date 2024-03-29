/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (49.21%)
 * Likes:    5077
 * Dislikes: 778
 * Total Accepted:    438.7K
 * Total Submissions: 891.4K
 * Testcase Example:  '"25525511135"'
 *
 * A valid IP address consists of exactly four integers separated by single
 * dots. Each integer is between 0 and 255 (inclusive) and cannot have leading
 * zeros.
 *
 *
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but
 * "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP
 * addresses.
 *
 *
 * Given a string s containing only digits, return all possible valid IP
 * addresses that can be formed by inserting dots into s. You are not allowed
 * to reorder or remove any digits in s. You may return the valid IP addresses
 * in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "25525511135"
 * Output: ["255.255.11.135","255.255.111.35"]
 *
 *
 * Example 2:
 *
 *
 * Input: s = "0000"
 * Output: ["0.0.0.0"]
 *
 *
 * Example 3:
 *
 *
 * Input: s = "101023"
 * Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 20
 * s consists of digits only.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = [];
  let restoreIpAddressesImpl = function (index, temp) {
    if (
      temp.length != 0 &&
      temp[temp.length - 1][0] == "0" &&
      temp[temp.length - 1].length > 1
    )
      return;
    let num = parseInt(temp[temp.length - 1]);
    if (num < 0 || num > 255 || temp.length > 4) return;
    if (index >= s.length && temp.length == 4) {
      result.push(temp.join("."));
      return;
    }
    for (let i = index; i < index + 3 && i < s.length; i++) {
      temp.push(s.slice(index, i + 1));
      restoreIpAddressesImpl(i + 1, temp);
      temp.pop();
    }
  };
  restoreIpAddressesImpl(0, []);
  return result;
};
// @lc code=end
