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

function addVideoGame(){
    console.log("Add video game was called");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function displayGame(myGame:VideoGame):void{
    // 
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
    return true;
}

function $(id:string){
    return document.getElementById(id);
}