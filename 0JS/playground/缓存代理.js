const cacheTest = (() => {
    const dir = new Map(); // 使用 Map 对象来存储缓存
    return (numbers) => {
        if (dir.has(numbers)) { // 使用 Map 的 has 方法来检查缓存
            console.log("has cache");
            return dir.get(numbers); // 返回缓存中的值
        } else {
            dir.set(numbers, 1); // 将值存入缓存
            return dir.get(numbers); // 返回新添加的值
        }
    }
})()



console.log(cacheTest(1)); // 第一次调用，缓存中没有值，会返回1
console.log(cacheTest(1)); // 第二次调用，缓存中已有值，会返回1并输出 "has cache"

