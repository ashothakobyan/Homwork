1

function progresia(n1,n2,step){
    let out = []
    if(n1<=n2){
        for(let ;n1<=n2;n1+=step){
            out.push(n1)
        }
         return out
    }else{
        return "first number must be more then second"
    }    
   
}

2

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
    let i = 0 
    for(;i<arr.length;i++){
    }
    for(let j = 0;j<i;j++){
        arr.push(arr[j])
    }
    let v=2*i-1
    for(let j = 0;j<=i;j++,v--){
        arr[j] = arr[v]
    }
    for(let j=0;j<i;j++){
    arr.pop()
    }    
    return arr


    4

    function neighbor(arr){
        let arr2 =[]
        for(let i = 0;i<arr.length-1;i++){
            let x = arr[i] * arr[i+1]
            arr2.push(x)
        }
        return arr2
    }

    5

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
    
        let h = 0
        for(;h<arr.length;h++){}
        let h1=h
        for(;h1-i<h;h--){
            arr.unshift(arr[h1-1])
            arr.pop()
        }       
        }
    }
