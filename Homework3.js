1

function progresia(n1,n2,step){
    let out = []
    if(n1<=n2){
        for(;n1<=n2;n1+=step){
            out.push(n1)
        }
         return out
    }else{
        return "first number must be more then second"
    }    
}

2.first versia

function maxElementInArr(arr){
    let maxElement = arr[0]
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > maxElement){
            maxElement = arr[i]
        }           
    }
    return maxElement
}

2.second versia

function maxElementInArr(arr){
    for(let i = 0;i<arr.length;i++){
        let defolt = true
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                defolt = false
                break
            }
        }    
        if(defolt === true){
            return arr[i]
        }
    }
}

3

function reverseArr(arr){
    let v = arr.length
    for(let j = 0;j<v;j++){
        arr.push(arr[j])
    }
    v=arr.length-1
    for(let j = 0;j<=arr.length/2;j++,v--){
        arr[j] = arr[v]
    }
    for(let j=0;j<arr.length;j++){
    arr.pop()
    }    
    return arr
}

    4

    function neighbor(arr){
        let arr2 =[]
        for(let i = 0;i<arr.length-1;i++){
            let x = arr[i] * arr[i+1]
            arr2.push(x)
        }
        return arr2
    }

    5.first versia

function out(arr,number){
    let defolt = false
    let i = 0
    for(;i<arr.length;i++){
        if(arr[i] === number){
            defolt = true
            break
        }
    }
    if(defolt === false){
        arr.push(number)
        return arr   
    }else{
        for(let j = i;j<=i;j++){
            arr[j] = arr[j+1]
        }
        arr.pop()
        }
        return arr         
}

5.second versia

    function out(arr,number){
    let defolt = false
    let i = 0
    for(;i<arr.length;i++){
        if(arr[i] === number){
            defolt = true
            break
        }
    }
    if(defolt === false){
        arr.push(number)
        return arr   
    }else{
        for(let j = 0;j<=i;j++){
        arr.push(arr[0])
        arr.shift()
        }
        arr.pop()
        for(let j=arr.length,j1=j;j1-i<j;j--){
            arr.unshift(arr[j1-1])
            arr.pop()
        }
        return arr       
    }
}
