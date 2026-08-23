// Mouse Events

const button = document.getElementById('clickButton');
const box = document.getElementById('hoverBox');
const displayArea = document.getElementById('displayArea');

function showMessage(text) {
    displayArea.textContent = text;
}

// Click event
button.addEventListener('click', () => {
    showMessage('Button clicked!');
});

// Mouse over and out
box.addEventListener('mouseover', () => {
    showMessage('Mouse is over the box');
    box.classList.add('highlight');
});

box.addEventListener('mouseout', () => {
    showMessage('Mouse left the box');
    box.classList.remove('highlight');
});



// Keyboard Event

const inputField = document.getElementById('inputField');

inputField.addEventListener('keydown', (event) => {
    showMessage(`Key pressed: ${event.key}`);
});

inputField.addEventListener('keyup', () => {
    showMessage('Key released');
});



// Form Events  

inputField.addEventListener('focus', () => {
    showMessage('Input field is focused');
});

inputField.addEventListener('blur', () => {
    showMessage('Input field lost focus');
});



// Document Event 

document.addEventListener('DOMContentLoaded', () => {
    showMessage('Document is ready!');
});

window.addEventListener('load', () => {
    showMessage('Page is fully loaded!');
});

