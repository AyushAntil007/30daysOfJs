// Activity 1: For Loop

//Task 1: 
const num1=10;
for(let i=1;i<=num1;i++ ){
    console.log(i);
}
//Output:
/*
   1
   2
   3
   4
   5
   6
   7
   8
   9
   10
*/    

//Task 2: 
for(let i=1;i<=10;i++){
    console.log(5*i);
}
//Output:
/*
   5
   10
   15
   20
   25
   30
   35
   40
   45
   50
*/    

// Activity 2:  While Loop.

//Task 3:  
let num2=10;
let sum=0;
for(let i=1;i<=num1;i++){
    sum=sum+i;               //output-55
}
console.log(sum);

//Task 4: 
let j=10;
while(j>0){
    console.log(j);
    j--;
}
//Output
/*
  10
  9
  8
  7
  6
  5
  4
  3
  2
  1
*/

// Activity 3: Do...While Loop

//Task5 
let k=1;
do{
    console.log(k);
    k++;
}while(k<=5);
//Output:
/*
   1
   2
   3
   4
   5
*/   

//Task 6: 
let num = 5;
let ans=1;
do{
    ans*=num;
    num--;
}while(num>0);
console.log('The factorial of number is:'+ans);  //output-120

//Activity 4: Nested Loops

//Task 7
let row=6;
for(let i=1;i<=row;i++){
    let space = '';
    for (let j = 1; j <= i; j++) {
        space += '* ';
    }
    console.log(space);
}
//Output:
/* 
*
* *
* * *
* * * *
* * * * *
* * * * * *
*/

//Activity 5: Loop Control Statements

//Task 8 
let a=1;
while(a<=10){
    if(a===5){
        a++;
        continue;
    }
    console.log(a);
    a++;
}
//Output:
/*
  1
  2
  3
  4
  6
  7
  8
  9
  10
*/

//Task 9
a=1;
while(a<=10){
    if(a===7){
        a++;
        break;
    }
    console.log(a);
    a++;
}
//output:
// 1
// 2
// 3
// 4
// 5
// 6