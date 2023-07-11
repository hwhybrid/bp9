let radioButtons = document.querySelectorAll("#lieOption");
let checkGuess = document.querySelector("#check-guess");
let faveColor = document.querySelector("#color");
let favePlace = document.querySelector("#place");
let faveRitual = document.querySelector("#ritual");

const lieValue = "amateurContortionist";

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

checkGuess.addEventListener("click", handleGuess);

let handleFaveColour = () => {
    alert("My favourite colour is purple!");
};

faveColor.addEventListener("click", handleFaveColour);

let handleFavePlace = () => {
    alert("My favourite place is outer space!");
};

favePlace.addEventListener("click", handleFavePlace);

let handleFaveRitual = () => {
    alert("My favourite ritual is my daily nap!");
};

faveRitual.addEventListener("click", handleFaveRitual);
