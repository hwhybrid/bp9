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

let rouletteButton = document.querySelector("#rouletteButton");
let exploreButton = document.querySelector(".activity");
let restaurantRoulette = Math.floor(Math.random() * restaurantArray.length);

let rouletteHandler = () => {
    alert(
        `Your restaurant recommendation is: ${restaurantArray[restaurantRoulette]}`
    );
};

let activityHandler = () => {
    let activityTips = document.createElement("p");
    if (exploreButton.id === "music") {
        activityTips.innerHTML = "Learn about cool NYC music here: ";
    } else if (exploreButton.id === "food-drink") {
        activityTips.innerHTML =
            "Learn about cool NYC food and beverage spots here: ";
    } else if (exploreButton.id === "art-history") {
        activityTips.innerHTML =
            "Learn about cool NYC art and history spots here: ";
    } else if (exploreButton.id === "play") {
        activityTips.innerHTML =
            "Learn about cool NYC play spots for kids here: ";
    } else if (exploreButton.id === "literature") {
        activityTips.innerHTML = "Learn about cool NYC literary haunts here: ";
    } else {
        alert("Please make an activity selection to explore NYC.");
    }
    document.body.appendChild(activityTips);
};

rouletteButton.addEventListener("click", rouletteHandler);
exploreButton.addEventListener("click", activityHandler);
