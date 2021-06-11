let number= +prompt(), z=number, y=1
    if(number>10 && number%10 !== 0){
        while (z > 0)  
{(y=y*10) 
 z=(z-z%10)/10 
}
console.log((y/10)*(number%10)+(number-number%10)/10)}
    else if(number%10 === number || number%10 === 0 ){console.log(number)}
