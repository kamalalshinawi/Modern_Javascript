let div1 = document.getElementById("div1");
let button = document.getElementById("button");
let link = document.getElementById("link");

// when clicked on div1 will print div clicked only
div1.addEventListener("click", () => {
  console.log("div clicked");
});

// when clicked on button will print button clicked and div also
// button.addEventListener('click',(event)=>{

//     console.log('button clicked')
// })

// use StopPropagation and will use this event only and never mind the parent events
button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button clicked");
});

// now when clicked on the link wi'll not navigate to google
link.addEventListener("click", (event) => {
  event.preventDefault();
});
