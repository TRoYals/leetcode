/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 *
 * https://leetcode.com/problems/reconstruct-itinerary/description/
 *
 * algorithms
 * Hard (43.29%)
 * Likes:    5742
 * Dislikes: 1847
 * Total Accepted:    412K
 * Total Submissions: 951.7K
 * Testcase Example:  '[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]'
 *
 * You are given a list of airline tickets where tickets[i] = [fromi, toi]
 * represent the departure and the arrival airports of one flight. Reconstruct
 * the itinerary in order and return it.
 *
 * All of the tickets belong to a man who departs from "JFK", thus, the
 * itinerary must begin with "JFK". If there are multiple valid itineraries,
 * you should return the itinerary that has the smallest lexical order when
 * read as a single string.
 *
 *
 * For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than
 * ["JFK", "LGB"].
 *
 *
 * You may assume all tickets form at least one valid itinerary. You must use
 * all the tickets once and only once.
 *
 *
 * Example 1:
 *
 *
 * Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
 * Output: ["JFK","MUC","LHR","SFO","SJC"]
 *
 *
 * Example 2:
 *
 *
 * Input: tickets =
 * [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 * Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
 * Explanation: Another possible reconstruction is
 * ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= tickets.length <= 300
 * tickets[i].length == 2
 * fromi.length == 3
 * toi.length == 3
 * fromi and toi consist of uppercase English letters.
 * fromi != toi
 *
 *
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let results = [];
  let findItineraryImpl = function (temp, ticketsVisited) {
    if (temp.length == tickets.length) {
      results.push(temp.slice());
      return;
    }
    for (let i = 0; i < tickets.length; i++) {
      if (ticketsVisited[i] == 1) {
        continue;
      }
      if (temp.length == 0) {
        if (tickets[i][0] == "JFK") {
          temp.push(tickets[i]);
        } else continue;
      } else {
        if (tickets[i][0] == temp[temp.length - 1][1]) {
          temp.push(tickets[i]);
        } else {
          continue;
        }
      }
      ticketsVisited[i] = 1;
      findItineraryImpl(temp, ticketsVisited);
      ticketsVisited[i] = 0;
      temp.pop();
    }
  };
  let ticketsVisited = Array.from({ length: tickets.length }, () => 0);
  findItineraryImpl([], ticketsVisited);
  results.forEach((item, index) => {
    const path = item.reduce(
      (acc, curr) => {
        acc.push(curr[1]);
        return acc;
      },
      ["JFK"]
    );
    results[index] = path;
  });
  results.sort();
  return results[0];
};
// @lc code=end
