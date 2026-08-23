let textElement = document.getElementById('text-content');

// Reading the current text
console.log(textElement.textContent);  // "This is some text we'll modify."

// Changing the text
textElement.textContent = "This text has been changed!";
// You should now see the new text on your page

// Adding to existing text
textElement.textContent += " Added more text!";
// The text should now be longer


let htmlElement = document.getElementById('html-content');

// Reading HTML content
console.log(htmlElement.innerHTML);  // Shows the HTML including the <span> tag

// Changing HTML content
htmlElement.innerHTML = "This text is <strong>bold</strong> and this is <em>italic</em>.";
// You should see formatted text with bold and italic parts

// Adding HTML content
htmlElement.innerHTML += " <span style='color: blue;'>Blue text added!</span>";
// New blue text should appear




let imgElement = document.getElementById('demo-img');
let linkElement = document.getElementById('demo-link');

// Getting attribute values
console.log(imgElement.getAttribute('src'));
console.log(linkElement.getAttribute('href'));

// Setting attribute values
linkElement.setAttribute('href', '<https://www.example.com>');
// Link now points to example.com

// Checking if attribute exists
console.log(imgElement.hasAttribute('alt'));  // true

// Removing attributes
linkElement.removeAttribute('href');
// Link should no longer be clickable



let styleBox = document.getElementById('style-box');

// Setting individual styles
styleBox.style.backgroundColor = 'lightblue';
styleBox.style.border = '2px solid blue';
styleBox.style.borderRadius = '10px';
// Box should now be light blue with rounded corners

// CSS properties with dashes are written in camelCase
styleBox.style.marginTop = '100px';  // Instead of margin-top

// Getting computed styles
let computedStyle = window.getComputedStyle(styleBox);
console.log(computedStyle.backgroundColor);


let classDemo = document.getElementById('class-demo');

// Adding a class
classDemo.classList.add('highlight');
// Element should now have yellow background

// Removing a class
classDemo.classList.remove('highlight');
// Yellow background should disappear

// Toggling a class
classDemo.classList.toggle('highlight');  // Adds if missing, removes if present
// Click multiple times to see it toggle

// Checking if class exists
console.log(classDemo.classList.contains('highlight'));

// Multiple classes
classDemo.classList.add('success', 'highlight');
// Element should now be green, bold, and highlighted

// Replacing one class with another
classDemo.classList.replace('success', 'error');
// Should change from green to red and italic