function allPosibleSubsets(arr,length,x = -1){
    if(arr.length <= length){
        return [arr]
    }
    x++
    let result = []
    let result1 = []
    for(let i = 0;i<length-1;i++){
        result1.push(arr[i])
    }
    for(let i = length-1;i < arr.length;i++){
        result.push(result1.concat(arr[i]))
    }
    if(length > 2){
        result = result.concat(f(arr.slice(0,1).concat(arr.slice(2)),length,x))
    }
        if(x === 0 && length !== 1){
        while(arr.length > length){
            arr.splice(0,1)
            result = result.concat(f(arr,length,x))
        }
    }
    return result
}
