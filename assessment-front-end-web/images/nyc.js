let restaurantArray = [
    "Kochi",
    "Dhamaka",
    "Atoboy",
    "Ugly Baby",
    "Cote",
    "Cadence",
    "Van Da",
    "Oxomoco",
    "Dirt Candy",
    "Rangoon",
    "Sofreh",
    "Tanoreen",
    "Kokomo",
    "Teranga",
    "Wayla",
];

let playButton = document.querySelector("#suggestion");
let restaurantRoulette = Math.floor(Math.random() * restaurantArray.length);

let rouletteHandler = () => {
    alert(`Your restaurant recommendation is: ${restaurantRoulette}`);
};


playButton.addEventListener