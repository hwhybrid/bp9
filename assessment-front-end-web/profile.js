let radioButtons = document.querySelectorAll("#lieOption");
let checkGuess = document.querySelector("#check-guess");

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