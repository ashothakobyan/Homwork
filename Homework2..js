//1. Write a function which receives an array and a number as arguments
//and returns a new arrayfrom the elements of the given array which are larger than the given number.
function lagerNumbers(arr,n){
    let result = arr.filter(el => el>n)
    if(result.length === 0){
        return "Such values do not exist."
    }else{
        return result
    }
}

//2.Write a function, which receives two numbers as arguments and finds all numbers between
//them such that each digit of the number is even. The numbers obtained should be printed in a
//comma-separated sequence on a single line.

function evanNumbersBetwinArgumentsWhichAllDegitesAreEvan(n1,n2){
    debugger
    let result = ""
    for(let i = n1;i <= n2;i++){
        let j = 0
        for(;j<String(i).length;j++){
            if(String(i)[j] % 2 !== 0){
                break
            }
            if(j === String(i).length-1){
                result += String(i) +","
            }
        }
    }
    if(result === ""){
        return "Such numbers does not exist."
    }
    result = result.substring(0,result.length-1)
    return result
}

//3.Write a recursive function to determine whether all digits of the number are odd or not.

function ifAllDigiteOfNumberAreOdd(number){
    if(String(number).length === 1 && number %2 !==0){
        return true
    }else if(String(number)[0] %2 !== 0){
        return f(+String(number).substring(1))
    }else{
        return false
    }
}

//4.Given an array of numbers. Write a recursive function to find its minimal positive element. (if suchelement does not exist, return -1)․

function findeMinimalPositiveElement(arr){
    if(arr.length === 1 && arr[0] >=0){
        return arr[0]
    }else if(arr.length === 1 && arr[0] <0){
        return -1
    }else if(arr[0] < arr[1] && arr[0] >= 0 || arr[1] < 0 || arr[0] === arr[1] || arr[0] < 0 && arr[1] < 0){
        arr.splice(1,1)
        return f(arr)
    }else{
        arr.splice(0,1)
        return f(arr)
    }
}

//5. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting
//order is violated.

function FindTheIndexWhereSortingOrderIsViolated(arr){
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            return i+1
        }
    }
    return -1
}
