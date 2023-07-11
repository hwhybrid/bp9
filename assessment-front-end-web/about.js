console.log("hello world");

// Here are my query selectors

let form = document.querySelector("#contact");
let catPic = document.querySelector("#lilbub");


// Here are my event handlers

function handleSubmit(evt) {
    evt.preventDefault();

    alert("The form has been submitted. We'll be in touch!");
}

let handleMouseover = () => {
    alert("You're super cool!");
};


// Here are my event listeners

form.addEventListener("submit", handleSubmit);
catPic.addEventListener("mouseover", handleMouseover);

