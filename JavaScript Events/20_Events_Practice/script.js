// let div1 = document.getElementById("div1");
// let button = document.getElementById("button");
// let link = document.getElementById("link");

// // when clicked on div1 will print div clicked only
// div1.addEventListener("click", () => {
//   console.log("div clicked");
// });

// // when clicked on button will print button clicked and div also
// // button.addEventListener('click',(event)=>{

// //     console.log('button clicked')
// // })

// // use StopPropagation and will use this event only and never mind the parent events
// button.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("button clicked");
// });

// // now when clicked on the link wi'll not navigate to google
// link.addEventListener("click", (event) => {
//   event.preventDefault();
// });


let nameInput = document.getElementById('name')
let submitBtn = document.getElementById('form')
let textH1 = document.getElementById('value')
let text2 = document.getElementById('val2')
let nameError = document.getElementById('nameError')
// nameInput.addEventListener("keydown" , (event) => {
    
//     // this return the whole input 
//     // textH1.textContent = event.target.value 

//     // we can use the same thing with 
//     textH1.textContent = nameInput.value

//     // this return only one string "what's actually you press on the keyboard"
//     text2.textContent = event.key 

// })


submitBtn.addEventListener('submit' , (event) => {
    // first remove the previous actions 
    event.preventDefault()
    // 1 Validation
    if(!nameInput.value){
        nameError.style.display = 'block'
       
    }
    else if(nameInput.value.length < 3){
        textH1.textContent = "the minimum must be 3 char"
        textH1.style.color = 'red'
        nameError.style.display = 'none'
    }

    text2.textContent = event.target.value

})



// const nameInput = document.getElementById("nameInput");
// const form = document.getElementById("myForm");

// // Real-time input handling
// nameInput.addEventListener("input", (event) => {
//   // event.target.value holds the current input value
//   console.log("Current value:", event.target.value);

//   // You can also use the input element directly
//   console.log("Same value:", nameInput.value);

//   // Common tasks:
//   // 1. Validation
//   if (event.target.value.length < 3) {
//     nameError.textContent = "Name must be at least 3 characters";
//     nameError.style.display = "block";
//   } else {
//     nameError.style.display = "none";
//   }

//   // 2. Transform input
//   event.target.value = event.target.value.toUpperCase();
// });

// // Different events for different purposes
// nameInput.addEventListener("change", (event) => {
//   // 'change' fires when input loses focus
//   console.log("Final value:", event.target.value);
// });

// nameInput.addEventListener("keyup", (event) => {
//   // Handle specific keys
//   if (event.key === "Enter") {
//     console.log("Enter pressed, value is:", event.target.value);
//   }
// });

// form.addEventListener("submit", (event) => {
//   // Preventing default behaviour of the submit event so that the page does not reload. Remove this and submit/press enter again to see the difference.
//   event.preventDefault();
// });