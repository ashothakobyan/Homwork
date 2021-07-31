1

function frequencyOfEachUniqueNumber(arr){
    let obj = {}
    let length = arr.length
    let divide
    for(let i = 0;i<arr.length;i++){
        let sameNumber = 1
        let inc = arr.length-1
        while(inc > i){
            if(arr.includes(arr[i],inc)){
                arr.splice(inc,1)
                sameNumber++
            }
            inc-- 
        }
        divide = sameNumber/length 
        obj[arr[i]] = divide           
    }
    return obj
}

2


function longestWordInString(str){
    let result = ""
    let arr = str.split(/ |,|-/)
    for(let i in arr){
        if(arr[i].length >= result.length){
            result = arr[i]
        }
    }
    return result
}

3


function longSubstringInStr(str){
    let result = ""
    let subStr
    for(let i = 0;i<str.length;i++){
        if(str.indexOf(str[i],i+1) !== -1 && str[i] !== " "){
            subStr=str.substring(i,str.indexOf(str[i],i+1))
        }else{
            subStr=str.substring(i)
        }
        for(let j = 0;j<subStr.length;j++){
            if(subStr.indexOf(subStr[j],j+1) !== -1 && subStr[j] !== " "){
                subStr = subStr.substring(0,subStr.indexOf(subStr[j],j+1))
            }
        }
        if(subStr.length >= result.length){
            result = subStr
        }
    }
    return result
}


4


function movingCharInStr(str){
    let str2
    let result = ""
    for(let i = 0,j = 3;i<str.length;i+=3,j+=3){
        if(j > str.length){
            j = str.length
        }
        str2 = str.substring(i,j)
        if(str2.length === 3){
           str2 = str2[1] + str2[2] + str2[0]
            result = result.concat(str2)
        }else{
            result = result.concat(str2)
        }
    }
    
    return result
}

5


function onlyUnice(arr){
    for(let i = 0;i<arr.length;i++){
        let inc = arr.length-1
        while(inc > i){
            if(arr.includes(arr[i],inc)){
                arr.splice(inc,1)
            }
            inc-- 
        }        
    }
    return arr
}


function getAllUniceSubsets(arr){
    let result = []
    arr = onlyUnice(arr)
    if(arr.length >= 3){
        for(let i = 0;i<arr.length;i++){
            for(let j = i+1;j<arr.length;j++){
                for(let h = j+1;h<arr.length;h++){
                result.push([arr[i],arr[j],arr[h]])
                }
            }
        }
    }else{
        return arr
    }
    return result
}