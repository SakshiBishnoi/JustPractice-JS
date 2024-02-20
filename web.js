function greet(firstname , lastname){
    console.log(`Hello ${firstname} ${lastname[0]}`);
}
greet('Sakshi','Bishnoi');



function repeat(str, num) {
    let rs = '';
    for(let i=0; i<num; i++)
        rs += str;
    console.log(rs);
}



function isSnakeEyes(num1,num2){
    if(num1 === 1 && num2 === 1)
        console.log("Snake Eyes!");
    else
        console.log("Not Snake Eyes!")
}
isSnakeEyes(1,1);   



let lastElement = function(arr){
    
    if( arr.length === 0)
        return null;
    else
        return arr[arr.length -1];
}
console.log(lastElement([1, 2, 3]));



function capitalize(str){
    return str[0].toUpperCase()  + str.slice(1);
} 
console.log(capitalize('eggplant')); 



function sumArray(num){
    let sum = 0;
     for(let i=0; i<num.length; i++){
         sum +=num[i];
     }
     return sum;
 }
 
 console.log("sum of array is " + sumArray([50,55,100]));



function empty(func){
    func();
 }

 function lp(f){
    for( let i=0; i < 10 ; i++) 
       f(i);
 }

function called(){
    const random = Math.floor((Math.random()) * 10) + 1;
    console.log(random);
}

empty(called);

lp(called); 