//1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using
//arr.unshift(),assign second element to first, third element to second...)
function removFirstElem(arr,i = 0){
    if(arr[i] === arr[arr.length-1]){
        arr.pop()
        return arr
    }else{
        let x = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = x
        i++
        return removFirstElem(arr,i)
    }        
}
//2.2. Given an array of nested arrays. Write a recursive function
//that flattens it. (Hint create function that concats arrays).
function flattnes(arr,i = 0){
    if(arr[i] === undefined){
        arr.splice(i,1)
        i--
    }
    if(Array.isArray(arr[i])){
        arr = arr.slice(0,i).concat(f(arr[i]),arr.slice(i+1))
        i--
    }else if(i === arr.length - 1 ){
        return arr
    }
    i++
    return f(arr,i)
}

//3. Given a number. Write a function that calculates its sum of
//the digits and if that sum has more than 1 digit find the sum of
//digits of that number. Repeat that process if needed and return
//the result.

function sumOfdigits(number){
    let sum = 0
    let stNumber = String(number)
    for(let i = 0;i<stNumber.length;i++){
        sum += +stNumber[i]
    }
    return sum > 9 ? sumOfdigits(sum) : sum
}

//4. Given an object. Invert it (keys become values and values
//become keys). If there is more than key for that given value
//create an array.

function invert(obj){
    let newObj = {}
    for(let kay in obj){
        if(newObj[obj[kay]] && !Array.isArray(newObj[obj[kay]])){
           newObj[obj[kay]] = [newObj[obj[kay]]]
           newObj[obj[kay]].push(kay)
        }else if(Array.isArray(newObj[obj[kay]])){
            newObj[obj[kay]].push(kay)  
        }else{
            newObj[obj[kay]] = kay
        }
    }
    return newObj
}

//5. Create a function that builds a tree like object given an array with object which contains
//parent and id properties.

function tree(arr){
    let result = {}
    for(let j = 1;j<arr.length;j++){
        if(arr[0].id === arr[j].parent){
            if(!result[arr[0].id]){
                result[arr[0].id] = {}
            }
            result[arr[0].id][arr[j].id] = {}      
        }
    }
    for(let key in result){
        for(let key1 in result[key]){
            for(let i = 0;i<arr.length;i++){
                if(key1 === String(arr[i].parent)){
                    result[key][key1][arr[i].id] = tree(arr.slice(i))
                }
            }    
        }   
    }
    return result
}