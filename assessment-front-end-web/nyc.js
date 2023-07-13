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
// let exploreButton = document.querySelector(".activity");
let exploreButton = document.querySelector("#explore-ny select");
let letsGoButton = document.querySelector("#lets-go");

let rouletteHandler = () => {
    let restaurantRoulette = Math.floor(Math.random() * restaurantArray.length);
    console.log(
        `Your restaurant recommendation is: ${restaurantArray[restaurantRoulette]}!`
    );
    // alert(
    //     `Your restaurant recommendation is: ${restaurantArray[restaurantRoulette]}`
    // );

    let suggestionElement = document.querySelector("#suggestion");
    suggestionElement.textContent = `Your restaurant recommendation is: ${restaurantArray[restaurantRoulette]}`;
    console.log(
        `This is your restaurant suggestion: ${restaurantArray[restaurantRoulette]}`
    );
};

let activityHandler = (e) => {
    e.preventDefault(); // This is to prevent the default occurence (page reloading) when the form is submitted.
    let selectedActivity = exploreButton.value;
    let activityTips = document.querySelector("#activityTips");
    if (selectedActivity === "music") {
        activityTips.textContent =
            "Learn about cool NYC music here: https://www.timeout.com/newyork/music ";
    } else if (selectedActivity === "food-drink") {
        activityTips.textContent =
            "Learn about cool NYC food and beverage spots here: https://www.timeout.com/newyork/food-drink ";
    } else if (selectedActivity === "art-history") {
        activityTips.textContent =
            "Learn about cool NYC art and history spots here: ";
    } else if (selectedActivity === "play") {
        activityTips.textContent =
            "Learn about cool NYC play spots for kids here: https://www.timeout.com/new-york-kids/things-to-do/indoor-outdoor-play ";
    } else if (selectedActivity === "literature") {
        activityTips.textContent =
            "Learn about cool NYC literary haunts here: https://www.countryandtownhouse.com/travel/a-lit-lovers-guide-to-nyc/ ";
    } else {
        alert("Please make an activity selection to explore NYC.");
        return;
    }
};

rouletteButton.addEventListener("click", rouletteHandler);
letsGoButton.addEventListener("click", activityHandler);

// exploreButton.addEventListener("click", activityHandler);
