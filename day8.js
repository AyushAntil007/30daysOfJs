// Activity-1: Template Literals

// Task-1
let name= "Ayush";
let age=20;
let data=`My name is ${name} and i am ${age} years young`;
console.log(data);    //Output-My name is Ayush and i am 20 years young

// Task-2
let greet=`
hello ${name} !
Hope you are enjoying these holidays
While working with OCD team`
console.log(greet);  
//output-
// hello Ayush !
// Hope you are enjoying these holidays
// While working with OCD team


// Activity-2:Destructuring

// Task-3
const friends=["Ayush","Ankit","Anuj"];
const [First,, Last]=friends;
console.log(First,Last); //output-Ayush Anuj

// Task-4
const book={
title:"The OCD Club",
author: "JaiShankar Sir",
};
myBook(book);
function myBook({title,author}){
    console.log(`the title of the book is ${title} and its author is ${author}.`);
}
//output-the title of the book is The OCD Club and its author is JaiShankar Sir.


// Activity-3: Spread and Rest Operators

// Task-5
let oldArr=[1,2,3,4];
let newArr=[...oldArr,66,44,33];
console.log(newArr);
//output-
// [
//     1,  2,  3, 4,
//    66, 44, 33
//  ]

// Task-6
function Summation(...args){
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}
let arr=[1,2,3,4];
console.log(Summation(...arr)); //output-10


// Activity-4: Default Parameters

// Task-7
function product(a,b=10){
    return a*b;
}
console.log(product(5));//output-50


// Activity-5: Enhanced Object Literals

// Task-8
let bio = {
    name : "Ayush",
    age : 20,
    Intro(){
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}
bio.Intro();  //output-Hello my name is Ayush and my age is 20.

// Task-9
name="name";
age="age";
const obj={
    [name]:"Ayush",
    [age]:"20"
};
console.log(obj);   //output-{ name: 'Ayush', age: '20' }