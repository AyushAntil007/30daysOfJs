//ACTIVITY-1:Function Declaration
//Task-1
function check(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
if(check(5)){
    console.log("even");
}
else{
    console.log("odd");    //output-odd
}

// Task 2
function square(num){
    return num*num;
}
console.log("Square of num is:"+square(6));  //output-36

//ACTIVITY-2:Function Expression

//Task-3
function compare(num1,num2){
    if(num1>num2){
        console.log(num1 +"is greater");
    }
    else{
        console.log(num2 +"is greater");
    }
}
compare(5,8);   //output-8is greater


//Task 4 
function concatenate(str1,str2,str3){
    return str1+str2+str3;
}
let str1="Open";
let str2="Source";
let str3="Developer";
let str4=concatenate(str1,str2,str3);   //output-OpenSourceDeveloper
console.log(str4);


//ACTIVITY-3: Arrow Functions

//Task-5
let sum=(a,b)=>a+b;
let ans=sum(4,3);
console.log(ans);  //output-7

//Task-6 check for a specific character in string
const verify=(char,str)=>{
        for(let i=0; i<str.length;i++){
            if(str[i]==char) 
                return true;   
        } 
        return false;
}
    console.log(verify('y','Ayush')) //true
   
  
    
//ACTIVITY-4:Function Parameters and Default Values

//Task-7
const multi=(x,y=9)=>{
    return x*y;
}
console.log(multi(9));  //output-81

//Task-8:
function greet(name,age)
{
    return 'hi ${name}!.Your age is ${age}';
}
console.log(greet("Ayush","20"))      //HiAyush!.Your age is 20



//ACTIVITY-5:Higher-Order Functions
//Task-9:

function repeatFun(fn,times){
    for(let i=0;i<times;i++)
      fn()
}
function fun(){
    console.log("hey! how are you?!")
}
repeatFun(fun,3)   
//output-hey! how are you?!
// hey! how are you?!
// hey! how are you?!

// Task 10
function f1(n){
    return n*n;
}
function f2(n){
    return n-5;
}
function func(f1,f2,val){
    let result=f1(val);
    return f2(result);
}
console.log(func(f1,f2,3));    // Output : 4