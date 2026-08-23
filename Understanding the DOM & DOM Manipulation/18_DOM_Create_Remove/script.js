let newParagraph = document.createElement("p");

newParagraph.textContent = "this is a new strings";

newParagraph.className = "newPara";

let container1 = document.getElementById("container1");

container1.appendChild(newParagraph);

let newButton = document.createElement("button");

newButton.textContent = "Click me!";

let container2 = document.getElementById("container2");

container2.appendChild(newButton);

// Create an image
let newImage = document.createElement("img");
newImage.src = "https://placehold.co/150";
newImage.alt = "Placeholder image";
container1.appendChild(newImage);

let heading1 = document.createElement("h1");

heading1.textContent = "this is alshinawi";

let specificH2 = document.getElementsByTagName("h2")[0];

container1.insertBefore(heading1, specificH2);

let button = container2.querySelector("button");

if (button) {
  container1.appendChild(button);
}

button.remove();
let img = document.querySelector("img");
container1.removeChild(img);


// Create a new list
let ul = document.createElement('ul');
container2.appendChild(ul);

// Function to add a new item
function addListItem(text) {
    let li = document.createElement('li');
    li.textContent = text;

    // Add a delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = ' x ';
    deleteButton.style.marginLeft = '10px';

    /* When clicked, remove the list item. This is an event that we will cover in 
    the next section!*/
    
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);
    ul.appendChild(li);
}

// Add some items
addListItem('First item');
addListItem('Second item');
addListItem('Third item');
