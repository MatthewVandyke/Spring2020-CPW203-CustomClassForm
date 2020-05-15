var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function clearAllErrors() {
    var errSummary = $("validation-summary");
    errSummary.innerText = "";
}
function addVideoGame() {
    console.log("Add video game was called");
    clearAllErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function displayGame(myGame) {
    var displayDiv = $("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var gameMediumDisplay = "";
    if (myGame.isDigitalOnly) {
        gameMediumDisplay = "This is a digital only game";
    }
    else {
        gameMediumDisplay = "You can buy a physical copy!";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". " +
        ("It costs $" + myGame.price.toFixed(2) + ". " + gameMediumDisplay);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getVideoGame() {
    var game = new VideoGame;
    game.title = $("title").value;
    game.price = parseFloat($("price").value);
    game.rating = $("rating").value;
    game.isDigitalOnly = $("online").checked;
    console.log(game);
    return game;
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required!");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Must be a valid number!");
    }
    var rating = $("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorMessage("You must choose a rating");
    }
    return isValid;
}
function addErrorMessage(error) {
    var errSummary = $("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = error;
    errSummary.appendChild(errItem);
}
function getInputById(id) {
    return $(id);
}
function $(id) {
    return document.getElementById(id);
}
