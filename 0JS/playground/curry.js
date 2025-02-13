
function curry(fn){
    return function curried(...args){
        console.log(args);
        if(args.length>=fn.length){
            return fn.apply(this,args);
        }else{
            return function(...args2){
                return curried.apply(this,[...args,...args2]);
            }
        }
    }
}

let add  = function(a,b,c){
    return a+b+c;
}


let addCurry = curry(add)
console.log(addCurry(1)(2)(3))
console.log(addCurry(1,2,3))
console.log(addCurry(1,2)(3))