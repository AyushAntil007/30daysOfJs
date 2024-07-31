
// Activity-1: Basic Event Handling

// Task 1:
let btn = document.getElementById('button');
let para = document.getElementById('para');

button.addEventListener('click', function(){
    para.textContent = 'The paragraph has been modified.';
});

// Task 2:
let image = document.getElementById('image');
image.addEventListener('dblclick',function(){
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});


// Activity-2: Mouse Events

// Task-3
let changecolor = document.getElementById('bgcolor');
changecolor.addEventListener('mouseover', function(){
    changecolor.style.backgroundColor = 'aqua';
});

//Task-4
changecolor.addEventListener('mouseout', function(){
    changecolor.style.backgroundColor = 'red';
});


// Activity-3: Keyboard Events

// Task-5
let input= document.getElementById('input');
input.addEventListener('keydown', function(event){
    console.log(`You have typed ${event.key} key`);
});

// Task-6:
let inputField = document.getElementById("inputField");
    let displayText = document.getElementById("displayText");

    inputField.addEventListener("keyup", function() {
        let currentValue = inputField.value;
        displayText.textContent = currentValue;
    });


// Activity-4: Form Events

// Task-7:
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    });


// Task-8:
    const dropdown = document.getElementById("dropdown");
    const displayitem = document.getElementById("selected");

    dropdown.addEventListener("change", function() {
        const selectedValue = dropdown.value;
        displayitem.textContent = selectedValue;
    });


// Activity-5: Event Delegation

// Task-9:
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("list");
    list.addEventListener("click", function(event) {
        if (event.target && event.target.nodeName === "LI") {
            console.log(event.target.textContent);
        }
    });
});

// Task-10: 
document.addEventListener("DOMContentLoaded", function() {
    const parent = document.getElementById("parent");
    const addChildButton = document.getElementById("addChild");
    parent.addEventListener("click", function(event) {
        
        if (event.target && event.target.classList.contains("child")) {
            console.log(event.target.textContent);
        }
    });

    function addChildElement() {
        const newChild = document.createElement("div");
        newChild.className = "child";
        newChild.textContent = "I am a dynamically added child element";
        parent.appendChild(newChild);
    }

    addChildButton.addEventListener("click", addChildElement);
});