class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

//test code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E"
myGame.isDigitalOnly = true;
*/

window.onload = function(){
    let addBtn:HTMLElement = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function clearAllErrors():void{
    let errSummary = $("validation-summary");
    errSummary.innerText = "";
}

function addVideoGame(){
    console.log("Add video game was called");
    clearAllErrors();

    if(isAllDataValid()){
        let game:VideoGame = getVideoGame();
        displayGame(game);
    }
}

function displayGame(myGame:VideoGame):void{
    let displayDiv = <HTMLDivElement>$("display");


    //create h2 with title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    //create paragraph with game details
    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "";
    if(myGame.isDigitalOnly){
        gameMediumDisplay = "This is a digital only game";
    }
    else{
        gameMediumDisplay = "You can buy a physical copy!"
    }
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. ` +
                        `It costs $${myGame.price.toFixed(2)}. ${gameMediumDisplay}`;

    //add to display
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}

/**
 * gets all game data from the form
 * and returns it in a VideoGame object
 */
function getVideoGame():VideoGame{
    // TODO: create game, populate with data, return game
    let game = new VideoGame;
    game.title = (<HTMLInputElement>$("title")).value;
    game.price = parseFloat((<HTMLInputElement>$("price")).value);
    game.rating = (<HTMLSelectElement>$("rating")).value;
    game.isDigitalOnly = (<HTMLInputElement>$("online")).checked;

    console.log(game);
    return game;
}

function isAllDataValid():boolean{
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required!");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Must be a valid number!");
    }

    let rating = (<HTMLOptionElement>$("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMessage("You must choose a rating")
    }

    return isValid
}

function addErrorMessage(error:string) {
    let errSummary = $("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = error;
    errSummary.appendChild(errItem);
}

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>$(id);
}

function $(id:string){
    return document.getElementById(id);
}