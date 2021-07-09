1.

function separateNumbersInOddAndEven(arr){
    let arrOdd = []
    let arrEven = []
    for(let i = 0;i < arr.length;i++){
        if(arr[i] % 2 === 0){
            arrEven.push(arr[i])
        }else{
            arrOdd.push(arr[i])
        }
    }
    return [arrEven,arrOdd]
}

2. first versia

function inListCorectAnagrama(word,arr){
    let arr2 = []
    for(let i = 0;i<arr.length;i++){
        let numberOfCoinsidenc = 0
            if(word.length === arr[i].length){
                let str = arr[i]
                for(let h = 0;h<word.length;h++){
                    for(let g = 0;g < str.length;g++){
                        if(word[h] === str[g]){
                            numberOfCoinsidenc+=1
                            str = str.substring(0,g) + str.substring(g+1,)
                            break
                        }
                    }
                }
                 if(numberOfCoinsidenc === word.length){
                         arr2.push(arr[i])
                }
            }
    }
    return arr2
}

2.second versia

function inListCorectAnagrama(word,arr){
    let arr2 = []
    for(let i = 0;i<arr.length;i++){
        let numberOfCoinsidenc = 0
            if(word.length === arr[i].length){
                let str = arr[i]
                let str2 = ""
                for(let h = 0;h<word.length;h++){
                    for(let g = 0;g < str.length;g++){
                        if(word[h] === str[g]){
                            numberOfCoinsidenc+=1
                            for(let j = 0;j<str.length;j++){
                                if(word[h] !== str[j]){
                                    str2 += str[j]
                                }
                            }
                            str = str2
                            break
                        }
                    }
                }
                 if(numberOfCoinsidenc === word.length){
                         arr2.push(arr[i])
                }
            }
    }
    return arr2
}


3.

function remuveStringFromeLongString(longString,string){
    while(longString.indexOf(string) !== -1){
    longString = longString.substring(0,longString.indexOf(string)) +
    longString.substring(longString.indexOf(string) + string.length,)
    }
    return longString
}

 4.

 function onlyUniqueElements(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;){
            if(arr[i] === arr[j]){
                for(let h = j;h < arr.length-1;h++){
                    arr[h] = arr[h+1]
                }
                    arr.pop()
            }else{
                j++
            }
        }
    }
    return arr
}

5.first versia

function changeSymbol(str,s1,s2){
    while(str.indexOf(s1) !== -1){
        str = str.substring(0,str.indexOf(s1)) + s2 + str.substring(str.indexOf(s1) + 1,)
    }
    return str
}

5.second versia

function changeSymbol(str,s1,s2){
    let str2 = ""
    for(let i = 0;i<str.length;i++){
        if(str[i] !== s1){
            str2 += str[i]
        }else{
            str2 += s2
        }
    }
    return str2
}
