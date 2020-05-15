var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    console.log("Add video game was called");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function displayGame(myGame) {
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
    return true;
}
function $(id) {
    return document.getElementById(id);
}
