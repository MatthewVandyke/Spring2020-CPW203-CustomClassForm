window.onload = function(){
    let addBtn:HTMLElement = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    alert("test");
}