1.....

let number1,number2 
    number1 = number1 + number2
    number2 = number1 - number2
    number1 = number1 - number2
console.log(number1,number2)


2 ...... 
let number= +prompt(), z=number, y=1
    if(number>10 && number%10 !== 0){
        while (z > 0)  {
              (y=y*10) 
               z=(z-z%10)/10 }
        console.log((y/10)*(number%10)+(number-number%10)/10)}
    else if(number%10 === number || number%10 === 0 ){console.log(number)}

3 .......

let number, number1,number2,number3,number4
    console.log("the average of this number is equal " + (number+number1+number2+number3+number4)/5 )

4 .....

let number,number1,number2
    if(number > number1 && number > number2 && number1>number2){
        console.log(number,number1,number2)
    }else if(number > number1 && number > number2 && number2>number1){
        console.log(number,number2,number1)
    }else if(number1 >number && number1>number2 && number > number2){
        console.log(number1,number,number2)
    }else if(number1 > number && number1 > number2 && number2 > number){
        console.log(number1,number2,number)
    }else if(number2 > number && number2 > number1 && number > number1){
    console.log(number2,number,number1)
}else {
    console.log(number2,number1,number)
}

5

var n = +prompt()

var i = 0
var j = 0

if (n % 2 === 0 && !Math.floor(n / 10)){
    i += 1
}

if (n % 3 === 0 && n % 10 === 1){
    j += 1
}
