let objectA = {
    task :[1,2,3],
    taskb :{},
    taskc :[[1,2,"234",[1,244]],[2],[null]]
}

function deepClone(obj){
    if(obj===null){
        return null;
    }
    if(typeof obj==="object"){
        let newObj = obj instanceof Array?[]:{};
        if(newObj instanceof Array){
            for(let item of obj){
                newObj.push(deepClone(item));
            }
        }else{
            for(let item in obj){
                newObj[item]  = deepClone(obj[item]);
            }
        }

        return newObj;
    }else{
        return obj;
    }
}

let objectb = deepClone(objectA);
console.log(objectb);