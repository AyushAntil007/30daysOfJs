//ACTIVITY 1 : ARRAY CREATION AND ACCESS

//task 1 
let arr = [1,2,3,4,5];

console.log("array having numbers from 1-5 is  :",arr);  //output-array having numbers from 1-5 is  :[1,2,3,4,5]

//task 2 
console.log("first element of array is : ",arr[0]); 
let n = arr.length - 1;
console.log("last element of array is :",arr[n]);  //output-first element of array is :1
                                                   //       last element of array is : 5

//ACTIVITY 2 : ARRAY METHODS

//task 3 
let arr2 = [11,22,33,44,55];
arr2.push(66);
console.log("pushed array :",arr2);//output-pushed array :[11,22,33,44,55,66]


//task 4
arr2.pop();
console.log("poped array: ",arr2);//output -poped array: [ 11,22,33,44,55]


//task 5 
arr2.shift();
console.log("shifted array : ",arr2);//output-shifted array :[22,33,44,55]


//task 6 
arr2.unshift(11);
console.log("unshifted array : ",arr2);//output-unshifted array :[11,22,33,44,55]


// ACTIVITY 3 : ARRAY METHODS 

//task 7 
let arr3 = [11,22,33,44,55];
let arr4 = arr3.map((a)=>{
    return a%10;
});
console.log("mapped array:",arr4); //output-mapped array:[1,2,3,4,5]


//task 8 
let arr5 = arr3.filter((a)=>{
    return a%2==0;
});
console.log("filtered array:",arr5);//output-[22,44]


//task 9 
let a= 0;
let sum= arr3.reduce((a,b)=>{
    return a+b;
});
console.log("sum of array is:",sum);//output-sum of array is: 165


//ACTIVITY 4 : ARRAY ITERATION

//task 10 
let arr6 = [11,22,33,44,55];
console.log("Elements of array are :");
for(let i=0;i<arr6.length;i++){
    console.log(arr6[i]);
}

//output-
// Elements of array are :
// 11
// 22
// 33
// 44
// 55

//task 11 
let arr7 = [11,22,33,44,55];
console.log("Elements of array are :");
arr7.forEach((a)=>{
    console.log(a);
});

//output-
// Elements of array are :
// 11
// 22
// 33
// 44
// 55

//ACTIVITY 5 : MULTIDIMENSIONAL ARRAY

//task 12
let arr8 = [[1,2,3],[4,5,6],[7,8,9]];
console.log("2-d array is :");
for(let i=0;i<arr8.length;i++){
    str=""
    for(let j=0;j<arr8[0].length;j++){
        str = str + " " + arr8[i][j] + " ";
    }
    console.log(str);
}

//output-
// 2-d array is :
//  1  2  3
//  4  5  6
//  7  8  9

 //task 13 
 console.log("element at col=1 and row 1 is:",arr8[1][1]);

 //output-element at col=1 and row 1 is:5