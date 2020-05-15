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

function getVideoGame():VideoGame{
    // TODO: create game, populate with data, return game
    let myGame = new VideoGame;

    return myGame;
}

function isAllDataValid():boolean{
    return true;
}