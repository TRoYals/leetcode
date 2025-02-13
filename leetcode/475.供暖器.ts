/*
 * @lc app=leetcode.cn id=475 lang=typescript
 *
 * [475] 供暖器
 *
 * https://leetcode.cn/problems/heaters/description/
 *
 * algorithms
 * Medium (41.48%)
 * Likes:    480
 * Dislikes: 0
 * Total Accepted:    77.1K
 * Total Submissions: 185.8K
 * Testcase Example:  '[1,2,3]\n[2]'
 *
 * 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
 * 
 * 在加热器的加热半径范围内的每个房屋都可以获得供暖。
 * 
 * 现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。
 * 
 * 注意：所有供暖器 heaters 都遵循你的半径标准，加热的半径也一样。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: houses = [1,2,3], heaters = [2]
 * 输出: 1
 * 解释: 仅在位置 2 上有一个供暖器。如果我们将加热半径设为 1，那么所有房屋就都能得到供暖。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: houses = [1,2,3,4], heaters = [1,4]
 * 输出: 1
 * 解释: 在位置 1, 4 上有两个供暖器。我们需要将加热半径设为 1，这样所有房屋就都能得到供暖。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：houses = [1,5], heaters = [2]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= houses.length, heaters.length <= 3 * 10^4
 * 1 <= houses[i], heaters[i] <= 10^9
 * 
 * 
 */
let houses = [282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923];
let heates = [823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612];
console.log(findRadius(houses,heates))

// @lc code=start
function bisectLeft(house:number,heater:number[]){
    let left = 0;
    let right = heater.length;
    let mid = Math.floor((left+right)/2); 
    while(left<right){
        mid = Math.floor((left+right)/2);
        if(heater[mid]>=house){
            right = mid;
        }else{
            left = mid+1;
        }
    }
    return right;
}


function findRadius(houses: number[], heaters: number[]): number {
    houses.sort((a,b)=>a-b);
    heaters.sort((a,b)=>a-b);
    let curHeat:number;
    let curRadis = 0;
    for(let i = 0;i<houses.length;i++){
        curHeat = bisectLeft(houses[i],heaters);
        if(heaters[curHeat]===houses[i]){
            continue;
        }
        if(curHeat===0){
            curRadis = Math.max(curRadis,heaters[curHeat]-houses[i]);
        }else if(curHeat===heaters.length){
            curRadis = Math.max(curRadis,houses[i]-heaters[curHeat-1]);
        }else{
            curRadis = Math.max(curRadis,Math.min(houses[i]-heaters[curHeat-1],heaters[curHeat]-houses[i]))
        }
    }
    return curRadis;
};
// @lc code=end

