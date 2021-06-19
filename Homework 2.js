1

let i = 0

for(let number = Math.abs(+prompt());(number)>0;number =(number-number%10)/10){
    if(number%10===9){
        i++
    }
}
console.log(i)

2.first versia

let n1 = +prompt()
let v = ""
let n2= +prompt()

for(let i=1,j=2;i<n2;i*=2,j*=2){
    if(i>=n1 && j<n2){    
        v+=i+","
    }else if(i>=n1 && j>n2){
        v+=i            
    }
}
console.log(v)

2.sekond versia

let n1 = +prompt()
let v = []
let n2= +prompt()

for(let i=1;i<n2;i*=2){
  if(i>=n1) {
      v.push(i)
    }
}
console.log(v)

3.first versia

let number= +prompt()
let number1=number
let i = 1

while(number>10){
    i*=10,number=(number-number%10)/10
}

let out = ""

while(i>=1){
    if((Math.floor(number1/i)) % 2 ===0 && (Math.floor(number1/i*10)%2)===0 && i!==1){
        out+= (Math.floor(number1/i)%10)+"-"
    }else{
        out+= (Math.floor(number1/i)%10)+"" 
    }i/=10
}
console.log(out)

3.sekond versia

let n = prompt([])
let v = ""
for(let i = 0;i<n.length;i++){
    if(n[i] % 2 == 0 && n[i + 1] % 2 == 0){
        v+= n[i]+"-"
    }else{
        v+= n[i]+""
    }
}
console.log(v)

4.

let n= +prompt()
let n1 = ""

while(n>0){
    n1+= n%10,n=(n-n%10)/10
}
console.log(n1)

5.first versia

let number = +prompt("write number")
let N1 = 3
let chekerN1 = 2
let primenumber = 0
let cheker2N1 = 2
let numberOfPrimenumbers = 0


if(number>1){
    while(numberOfPrimenumbers < number - 1){
        chekerN1 = cheker2N1
        while(N1  % chekerN1 !== 0 && chekerN1 < N1 - 1){
            chekerN1++
        }
            if(chekerN1 === N1 - 1){
                primenumber = N1,numberOfPrimenumbers++
            }
       N1++
}
    console.log(primenumber)}
else if(number === 1){
    console.log(2)
}


5.second versia

let number = +prompt("write number")
let N1 = 3
let chekerN1 = 2
let primenumber = []
let cheker2N1 = 2
let numberOfPrimenumbers = 0

if(number>1){
    while(primenumber.length < number - 1){
        chekerN1 = cheker2N1
        while(N1  % chekerN1 !== 0 && chekerN1 < N1 - 1){
            chekerN1++
        }
            if(chekerN1 === N1 - 1){
                primenumber.push(N1),numberOfPrimenumbers++
            }
       N1++
}
    console.log(primenumber[numberOfPrimenumbers-1])}
else if(number === 1){
    console.log(2)
}
    
    