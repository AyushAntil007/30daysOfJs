// Activity 1:If-Else statements

// Task 1
let num1 = 4;
if (num1 > 0) {
    console.log("positive");
}
else if (num1 < 0) {
    console.log("negative");
}
else {
    console.log("zero");           //output-positive
}

// Task 2
let age = 21;
if (age >= 21) {
    console.log("elegible to vote");
}
else {
    console.log("you are not eligible"); //output-elegible to vote
}


//Activity-2  Nested if else statements

//Task 3
let a = 5;
let b = 8;
let c = 7;
if (a > b) {
    if (a > c) {
        console.log("a is greater");
    }
    else {
        console.log("c is graeter");
    }
}
else {
    if (b > c) {
        console.log("b is graeter");
    }
    else {
        console.log("c is graeter");  //output-b is greater
    }
}

// Activity-3 Switch Case

//Task 4
const date = new Date();
let day = date.getDay();

switch (day) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wedday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("No day exist")   //output-sunday

}

//Task 5
let marks=88;
switch (true) {
    case (marks>80):
        console.log("A");
        break;
    case (60>marks<=80):
        console.log("B");
        break;
    case (45>marks<=60):
        console.log("C");
        break;
    case (marks<=45):
        console.log("D");   //output-A
        break;
}
// Activity 4:Ternary Operator

//Task 6
let k = 5;
let check=k%2==0?"even":"odd";   //output-odd
console.log(check); 


//Activity-5 Combining Conditions

//Task 7
let year=2016;
if((year%4==0&&year%100!=0)||year%400==0){
    console.log("leap year");
}
else{
    console.log("not a leap year");   //output-leap year
}