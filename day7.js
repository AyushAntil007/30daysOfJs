// Activity-1: Object Creation And Access

//Task-1
let book={
    title:"The OCD Club",
    author:"Er. Himanshu",
    year:2024,
}
console.log(book);  //output-{ title: 'The OCD Club', author: 'Er. Himanshu', year: 2024 }

//Task-2
console.log(book.title);//output-The OCD Club
console.log(book.author);//output-Er. Himanshu


//Activity-2:Object Methods

//Task-3
book.data=()=>{
    return `The title of the book is ${book.title} and its author is ${book.author} Sir`;
}
console.log(book.data());//output-The title of the book is The OCD Club and its author is Er. Himanshu Sir

//Task-4
book.updateYear=function(a){
    book.year=a;
}
book.updateYear(2023);
console.log(book.year);//output-2023


//Activity-3: Nested Objects

//Task-5
const library={
    name:"Nit KKR library",
    books:[
        {  title:"The OCD Club",author:"Er. Himanshu",year:2024,},
        {  title:"The LSD Club",author:"Dr. XYZ",year:2023,},
        {  title:"The BTS Club",author:"Pr. ABC",year:2022,},   
    ]
}
console.log(library);
//output-
// {
//     name: 'Nit KKR library',
//     books: [
//       { title: 'The OCD Club', author: 'Er. Himanshu', year: 2024 },
//       { title: 'The LSD Club', author: 'Dr. XYZ', year: 2023 },
//       { title: 'The BTS Club', author: 'Pr. ABC', year: 2022 }
//     ]
//   }

//Task-6
console.log(library.name);//output-Nit KKR library

for(let i in library.books){
    console.log(library.books[i].title);
}
//output-
// The OCD Club
// The LSD Club
// The BTS Club


//Activity-4: The this keyword

//Task-7
book.info=function(){
    return `${this.title} had many achievements in the last ${this.year} year`;
}
console.log(book.info());//output-The OCD Club had many achievements in the last 2023 year


// Activity-5: Object Iteration

// Task-8
for (let key in book) {
    console.log(`${key} : ${book[key]}`);
}
//output-
// title : The OCD Club
// author : Er. Himanshu
// year : 2023
// data : ()=>{
//     return `The title of the book is ${book.title} and its author is ${book.author} Sir`;
// }
// updateYear : function(a){
//     book.year=a;
// }
// info : function(){
//     return `${this.title} had many achievements in the last ${this.year} year`;
// }


// Task-9
const keys = Object.keys(book);
const values = Object.values(book);
console.log("printing keys:");
console.log(keys);
//output-printing keys:
// [ 'title', 'author', 'year', 'data', 'updateYear', 'info' ]

console.log("printing values:");
console.log(values);
//output-
// printing values:
// [
//   'The OCD Club',
//   'Er. Himanshu',
//   2023,
//   [Function (anonymous)],
//   [Function (anonymous)],
//   [Function (anonymous)]
// ]