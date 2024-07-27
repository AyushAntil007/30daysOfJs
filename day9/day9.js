//Activity-1 Selecting And Manipulating Elements
//Task-1

let changetext=document.getElementById("text");
changetext.innerHTML="This is the updated text";


//Task-2
let bgcolor=document.querySelector(".background");
bgcolor.style.backgroundColor="red";


//Activity-2 Creating And Appending Elements

//Task-3
let body = document.querySelector("body");
let div = document.createElement("div");
div.innerText="This is the text written in the newly created div element";
body.append(div);


//Task-4
let list1=document.getElementById("list1");
list1.classList
let li=document.createElement("li");
li.innerText="The Guide";
list1.append(li);


//Activity-4 Removing Elements

//Task-5
const heading=document.getElementById("text");
heading.remove();

//Task-6
const parent=document.getElementById("list1");
parent.removeChild(parent.firstElementChild);
parent.removeChild(parent.lastElementChild);
parent.removeChild(parent.lastElementChild);


//Activity-5 Modifying Attributes And Classes

//Task-7
let link=document.querySelector(".link");
link.setAttribute("href","https://www.youtube.com");

//Task-8
li.classList.add('list-item');  //added a CSS class
li.classList.remove('list-item'); // removed the CSS class


//Activity-5  Event Handling

//Task-9
let btn1=document.getElementById("btn1");
let para=document.getElementById("para");
btn1.addEventListener("click",()=>{
     para.innerText="Namaste Duniya";
});

//Task-10
para.addEventListener("mouseover",()=>{
    para.style.border="2px solid white";
});