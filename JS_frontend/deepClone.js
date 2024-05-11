let obj1 = {
  name: "浪里行舟",
  arr: [1, [2, 3], 4],
};
let obj4 = deepClone(obj1);

function deepClone(obj) {
  if (obj === null) return obj;
  if (typeof obj != "object") return obj;
  let cloneObj = new obj.constructor();
  for (let key in obj) {
    cloneObj[key] = deepClone(obj[key]);
  }
  return cloneObj;
}
console.log("obj1", obj1);
console.log("obj4", obj4);
