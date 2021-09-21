function f(arr,l,x = -1){
    if(arr.length <= l){
        return [arr]
    }
    x++
    let result = []
    let result1 = []
    for(let i = 0;i<l-1;i++){
        result1.push(arr[i])
    }
    for(let i = l-1;i < arr.length;i++){
        result.push(result1.concat(arr[i]))
    }
    result = result.concat(f(arr.slice(0,1).concat(arr.slice(2)),l,x))
        if(x === 0){
        while(arr.length > l){
            arr.splice(0,1)
            result = result.concat(f(arr,l,x))
        }
    }
    return result
}