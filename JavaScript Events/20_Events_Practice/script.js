const nameInput = document.getElementById('nameInput');

nameInput.addEventListener('keydown', (event) => {
    // Let's look at what's inside the event object
    console.log('Event object:', event);

    // Most commonly used properties:
    console.log('Key pressed:', event.key);
    console.log('Target element:', event.target);
    console.log('Type of event:', event.type);

    // Getting input value
    console.log('Current input value:', event.target.value);
});


nameInput.addEventListener('input', (event) => {
    // These do the same thing:
    const value1 = event.target.value;
    const value2 = nameInput.value;

    console.log('User typed:', value1);
});

// customMenu

const customMenu = document.getElementById('customMenu');

document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevent default context menu

    // Position and show our custom menu
    customMenu.style.display = 'block';
    customMenu.style.left = event.clientX + 'px';
    customMenu.style.top = event.clientY + 'px';
});

// Hide menu when clicking elsewhere
document.addEventListener('click', () => {
    customMenu.style.display = 'none';
});