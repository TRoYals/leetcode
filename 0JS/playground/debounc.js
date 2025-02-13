let debounce = function (fn, delay) {
    let timer = null;
    return function debounced(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

// let debouncedFetch = debounce((abc)=>{console.log(abc)},1000);
// debouncedFetch("1234")
// setTimeout(()=>{debouncedFetch("1234")},500)
// setTimeout(()=>{setTimeout(()=>{debouncedFetch("1234")},500)
// },500)
// setTimeout(()=>{setTimeout(()=>{setTimeout(()=>{debouncedFetch("1234")},500)
// },500)},500)




// let throttle=function(fn,delay){
//     let timer = null;
//     return function throttled(...args){
//         if(!timer){
//             timer = setTimeout(() => {
//                 fn.apply(this, args)
//                 timer =null;
//             }, delay);
//         }
//     }
// }

let throttle = function(fn,delay){
    let lastTime = 0;
    return function throttled(...args){
        const now = Date.now();
        if(now- lastTime>=delay){
            fn.apply(this,args);
            lastTime = now;
        }
    }
}

let throttledFetch = throttle((a)=>console.log(a),1000);
throttledFetch("1234")
setTimeout(()=>{throttledFetch("1234")},600)
setTimeout(()=>{setTimeout(()=>{throttledFetch("1234")},600)
},600)
setTimeout(()=>{setTimeout(()=>{setTimeout(()=>{throttledFetch("1234")},700)
},700)},700)


