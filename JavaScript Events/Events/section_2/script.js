// let nameInput = document.getElementById('nameInput')

// nameInput.addEventListener('keydown' , (event) => {
//     console.log('Event Object ' , event);

//     console.log('Key Pressed:', event.key)
//     console.log('Target Element', event.target)
//     console.log('type of event', event.type)

//     console.log('Current input value',event.target.value);
// })

// nameInput.addEventListener('input' , (event) => {
//     // this is the same value with different way
//     const value1 = event.target.value;
//     const value2 = nameInput.value
//     console.log(`the value1 is ${value1} . value 2 is ${value2}` )
// })
const container = document.getElementById("mainContainer");
const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("nameError");
const customMenu = document.getElementById("customMenu");
const modal = document.getElementById("simpleModal");
form.addEventListener("submit", (event) => {
  let isValid = true;

  // Prevent the form from submitting immediately
  event.preventDefault();

  // clear previous errors
  nameError.style.display = "none";
  emailError.style.display = "none";

  // check name
  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  }
  // basic email validation

  if (!emailInput.value.includes("@")) {
    emailError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    console.log(`Form is valid , sending data...`);
  }
});

document.addEventListener("contextmenu", (event) => {
  // disable teh default custom menu browser
  event.preventDefault();

  customMenu.style.display = "block";

  customMenu.style.left = event.clientX + "px";
  customMenu.style.top = event.clientY + "px";
});

document.addEventListener("click", (event) => {
  customMenu.style.display = "none";
});

modal.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Modal Clicked , Event Stopped here ");
});

document.addEventListener("click", () => {
  console.log("Document  Close - modal should close ");
});

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.stopPropagation();
    event.target.parentElement.remove();
    return;
  }
  if (event.target.classList.contains("item")) {
    event.stopPropagation();
    console.log("item clicked");
  }
});

nameInput.addEventListener("input", (event) => {
  if (event.target.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
  // transform the input
  event.target.value = event.target.value.toUpperCase();
});

nameInput.addEventListener("change", (event) => {
  // the "change" will fires when input loses focus
  console.log(`Final value : ${event.target.value}`);
});

nameInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    console.log("Enter pressed , value is : ", event.target.value);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
