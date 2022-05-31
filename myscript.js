//Click the button to display your name
const myName = document.querySelector("#myName");
const btnName = document.querySelector("#btnName");

// event is click
// eventlistner on what element? on the button
btnName.addEventListener("click",displayName);

function displayName(){
  myName.value = "Lavina";
}


//Switch lights on mouse over
// Step 1 - Grab the element to target
let imgSec = document.querySelector("#imgSec");

// Step 2 = Type the function
function displayImage(){
  imgSec.innerHTML = `<img src="images/lighton.png" alt="lighton">`;
};
function displayImageOff(){
  imgSec.innerHTML = `<img src="images/lightoff.png" alt="lightoff">`;
};

// Step 3 = Add an event listener to the target element call the function on the event
imgSec.addEventListener("mouseover", displayImage)
imgSec.addEventListener("mouseout", displayImageOff)



// Double Click Button to Show Image
// Step 1 - Grab the element to target
let btndbName = document.querySelector("#btndbName");
let displayPara = document.querySelector("#displayPara");

// Step 2 = Type the function
function displayFace(){
  displayPara.innerHTML = `<img src="images/smileyface.png" alt="smileyface">`;
};

// Step 3 = Add an event listener to the target element call the function on the event
btndbName.addEventListener("dblclick", displayFace);


// Double Click Button to Show Traffic Light Colour
// Step 1 - Grab the element to target
let btnStop = document.querySelector("#btnStop");
let btnReady = document.querySelector("#btnReady");
let btnGo = document.querySelector("#btnGo");
let stopDiv = document.querySelector("#stopDiv");
let readyDiv = document.querySelector("#readyDiv");
let goDiv = document.querySelector("#goDiv");


// Step 2 = Type the function
function changeLightsRed(){
  stopDiv.style.backgroundColor  = "red";
  readyDiv.style.backgroundColor  = "black";
  goDiv.style.backgroundColor  = "black";
};
function changeLightsYellow(){
  stopDiv.style.backgrounColor  = "black";
  readyDiv.style.backgroundColor  = "yellow";
  goDiv.style.backgroundColor  = "black";
};
function changeLightsGreen(){
  goDiv.style.backgroundColor  = "green";
  readyDiv.style.backgroundColor  = "black";
  goDiv.style.backgroundColor  = "green";
};

// Step 3 = Add an event listener to the target element call the function on the event
btnStop.addEventListener("click", changeLightsRed);
btnReady.addEventListener("click", changeLightsYellow);
btnGo.addEventListener("click", changeLightsGreen);


// Change textbox Border Colours
// Step 1 - Grab the element to target
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let btn2Name = document.querySelector("#btn2Name");

// Step 2 = Type the function

function borderColour () {
  firstName.style.borderColour = "blue";
  lastName.style.borderColour = "red";
}

// Step 3 = Add an event listener to the target element call the function on the event
btn2Name.addEventListener("click", borderColour);




