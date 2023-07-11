console.log("hello world");

// Here are my query selectors

let form = document.querySelector("#contact");
let catPic = document.querySelector("#lilbub");
const radioButtons = document.querySelectorAll("#lieOption");
const checkGuess = document.querySelector("#check-guess");

const lieValue = "amateurContortionist";

// Here are my event handlers

function handleSubmit(evt) {
    evt.preventDefault();

    alert("The form has been submitted. We'll be in touch!");
}

let handleMouseover = () => {
    alert("You're super cool!");
};

let handleGuess = () => {
    let guess = "";
    radioButtons.forEach((radio) => {
        if (radio.checked) {
            guess = radio.value;
        }
    });
    if (guess === lieValue) {
        alert('You are correct! "I am an amateur contortionist" is the lie!');
    } else {
        alert("Refresh the page and guess again.");
    }
};

// Here are my event listeners

form.addEventListener("submit", handleSubmit);
catPic.addEventListener("mouseover", handleMouseover);
checkGuess.addEventListener("click", handleGuess);
