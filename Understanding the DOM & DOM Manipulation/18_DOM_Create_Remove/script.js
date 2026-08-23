let newParagraph = document.createElement('p');

newParagraph.textContent = 'this is a new strings';

newParagraph.className = 'newPara' ;

let container1 = document.getElementById('container1');

container1.appendChild(newParagraph)


let newButton = document.createElement('button')

newButton.textContent = "Click me!";


let container2 = document.getElementById('container2');

container2.appendChild(newButton)


// Create an image
let newImage = document.createElement('img');
newImage.src = 'https://placehold.co/150';
newImage.alt = 'Placeholder image';
container1.appendChild(newImage);