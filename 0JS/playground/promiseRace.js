
function promiseRace(...args){
    return new Promise((resolve,reject)=>{
        for(let item of args){
            Promise.resolve(item).then((res)=>{
                resolve(res)
            }).catch(
                err=>reject(err)
            )
        }
    })
}

let pA = fetch("https://www.baidu.com").then(res => 1)
let pB = new Promise((resolve) => {
    setTimeout(() => {
        fetch("https://www.baidu.com")
        resolve();
    }, 3000)
}).then(res => 2)
let pC = new Promise((resolve) => {
    setTimeout(() => {
        fetch("https://www.baidu.com")
        resolve();
    }, 3000)
}).then(res => 3)
promiseRace(pA, pB, pC).then(res => console.log(res)).catch(err => console.log(err));
