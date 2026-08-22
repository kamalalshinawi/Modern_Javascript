//  getElementById

let mainTitle = document.getElementById("main-title");
console.log(mainTitle);
mainTitle.style.color = "red";

// getElementByClassName

let boxes = document.getElementsByClassName("box");
console.log(boxes);

for (let box of boxes) {
  box.style.borderColor = "red";
}


let SpecialElements = document.getElementsByClassName('special')

for(let element of SpecialElements){
    element.style.border = '2px dashed green'
}


//  getElementByTagName

let paragraph = document.getElementsByTagName('p')
console.log(paragraph)

for(let p of paragraph){
    p.style.fontSize = '32px'
}


// querySelector

// Select by ID
let container = document.querySelector('#container');
container.style.padding = '100px';

// Select by class
let firstBox = document.querySelector('.box');
firstBox.style.backgroundColor = 'lightblue';

// More complex selections
let specialItem = document.querySelector('li.special');
specialItem.style.color = 'red';

// First paragraph inside container
let boxParagraph = document.querySelector('#container p');


// querySelectorAll

// Select all boxes
let allBoxes = document.querySelectorAll('.box');
allBoxes.forEach(box => {
    box.style.margin = '100px';
});

// Select all special elements inside the list
let specialListItems = document.querySelectorAll('#list .special');
specialListItems.forEach(item => {
    item.style.fontWeight = 'bold';
});


// let boxes = document.getElementsByClassName('box');
// This won't work:
// boxes.forEach(box => {...})

// Instead, convert to array first:
Array.from(boxes).forEach(box => {
    box.style.padding = '20px';
});


// Better way to handle potential null:
let element = document.getElementById('some-id');
if (element) {
    element.style.color = 'red';
} else {
    console.log('Element not found!');
}