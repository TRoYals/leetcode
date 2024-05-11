// 定义 startTime, endTime, profit 数组
const startTime = [1, 2, 3, 4];
const endTime = [3, 5, 10, 6];
const profit = [50, 20, 100, 70];

// 将三个数组组合为一个元组数组
const jobs = startTime.map((start, index) => ({
  start,
  end: endTime[index],
  profit: profit[index],
}));

// 对 jobs 数组进行排序，按照每个元素的 endTime 升序排序
jobs.sort((a, b) => a.end - b.end);

console.log(jobs);
