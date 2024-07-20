//Operators

// Activity-1: Arithmetic Operators

let num1=7;
let num2=4;
let ans;
// Task-1
ans=num1+num2;
console.log("The addition of num1 and num2 is:",ans);  //output-11

// Task-2
ans=num1-num2;
console.log("The subtraction of num1 and num2 is:",ans);  //output-3

// Task-3
ans=num1*num2;
console.log("The multiplication of num1 and num2 is:",ans);  //output-28

// Task-4
ans=num1/num2;
console.log("The division of num1 and num2 is:",ans);  //output-1.75

// Task-5
ans=num1%num2;
console.log("The remainder of num1 and num2 is:",ans);  //output-3



// Activity-2: Assignment Operators

num1=33;
var x=22;
// Task-6
x+=num1;
console.log("Result:",x); //output-55

// Task-7
x-=num1;
console.log("Result:",x); //output-22

// Activity-3: Comparison Operators

//task-8
if(num1>num2){
    console.log("num1 is greater than num2");
}
else{
    console.log("num2 is greater than num1"); //output-num1 is greater than num2
}

// task-9
if(num1>=num2){
    console.log("num1 is greater than or equal to num2");
}
else{
    console.log("num2 is greater than or equal to num1"); //output-num1 is greater than num2
}

// task-10
let num3=5;
let num4=8;
console.log("is num3 is equal to num4?",num3==num4); //output-false

let k=7;
let l="7";
console.log("is k is  equal to l?",k==l); //output-true

console.log("is k is strictly equal to l?",num3===num4); //output-false


// Activity-4: Logical Operators

num1=66;
num2=88;
num3=66;
// Task-11
if((num1<num2)&&(num1==num3)){
    console.log("Both the conditions are satisfied");
}
else{
    console.log("Both the conditions are not satisfied"); //output-Both the conditions are satisfied
}

// Task-12
if((num1>num2)||(num1!=num3)){
    console.log("Either Both the conditions are satisfied or any one condition is satisfied");
}
else{
    console.log("Both the conditions are not satisfied"); //output-Both the conditions are not satisfied
}


// Task-13
let str="";
if(!str){
    console.log("string is empty");
}
else{
    console.log("string is not empty"); //output-string is empty
}

// Activity-5: Ternary Operators

// Task-14
let marks=34;
let result=(marks>=33)?'pass':'fail';
console.log("you are:",result); //output-pass