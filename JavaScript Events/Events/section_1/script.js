// let clickButton = document.getElementById("click-button");
// let removeButton = document.getElementById("remove-button");

// let handelClickEvent = () => {
//   console.log(`the button clicked`);
// };

// clickButton.addEventListener("click", handelClickEvent);

// removeButton.addEventListener("click", () => {
//   clickButton.removeEventListener("click", handelClickEvent);

//   console.log("removed");
// });



let button = document.getElementById('click-button');
let box = document.getElementById('hoverBox')
let displayArea = document.getElementById('displayArea')
let displayArea2 = document.getElementById('displayArea2')
let inputField = document.getElementById('inputField')

let showMessage = (text) => {
    displayArea.textContent = text
}
let showMessage2 = (text) => {
    displayArea2.textContent = text
}


button.addEventListener('click', () => {
    showMessage('button clicked')
})


box.addEventListener('mouseover', () => {
    showMessage('mouse is over in the box');
    box.classList.add('highlight')
})

box.addEventListener('mouseout' , () => {
    showMessage('mouse left the box');
    box.classList.remove('highlight')
})


inputField.addEventListener('keydown' , (event) => {
    showMessage(`The Key is : ${event.key}`)
    showMessage2(`The value is : ${event.target.value}`)
})

inputField.addEventListener("keyup", () => {
    showMessage('key released')
})


inputField.addEventListener('focus' , () => {
    showMessage('input field is focused')
})

inputField.addEventListener('blur' , () => {
    showMessage('input field lost focus')
})

document.addEventListener('DOMContentLoaded', () => {
    showMessage('document is ready !')
})

window.addEventListener('load' , () => { 
    showMessage('page is fully loaded ')
})