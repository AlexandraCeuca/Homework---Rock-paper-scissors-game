const arr=["rock", "paper", "scissors"];
const playGameButton = document.getElementById("playButton");

function chooseOption () {
    return arr[Math.floor(arr.length * Math.random())];
}

playGameButton.addEventListener("click", function play() {
    let computer = chooseOption (); 
    let computersImagineChoice= document.getElementById("computersImagine");
    computersImagineChoice.src= `./photos/${computer}.JPG`;
    computersImagineChoice.style.visibility = "visible";

    let user = chooseOption ();
    let usersImagineChoice= document.getElementById("usersImagine");
    usersImagineChoice.src= `./photos/${user}.JPG`;
    usersImagineChoice.style.visibility = "visible";



    if(computer == user) {
        let matchResultComputer= document.getElementById("matchResultComputer");
        matchResultComputer.innerText = "It's a tie";
        matchResultComputer.style.color = "#d68024";

        let matchResultUser= document.getElementById("matchResultUser");
        matchResultUser.innerText = "It's a tie";
        matchResultUser.style.color = "#d68024";

    } else if (computer == "rock" && user== "scissors" || computer =="paper" && user =="rock" || computer== "scissors" && user=="paper"){
        let matchResultComputer= document.getElementById("matchResultComputer");
        matchResultComputer.innerText = "Winner!!!";
        matchResultComputer.style.color= "#32b828";
        

        let matchResultUser= document.getElementById("matchResultUser");
        matchResultUser.innerText = "Looser :(";
        matchResultUser.style.color = "#d11313";
    }
    else {
        let matchResultComputer= document.getElementById("matchResultComputer");
        matchResultComputer.innerText = "Looser :(";
        matchResultComputer.style.color= "#d11313";

        let matchResultUser= document.getElementById("matchResultUser");
        matchResultUser.innerText = "Winner!!!";
        matchResultUser.style.color = "#32b828";
    }
});

/*function setMatchResult (participantID, result) {
    let selectedElement= document.getElementById(participantID);
    selectedElement.innerText= result === "winner" ? "Winner!!!" : result === "looser" ? "Looser :(" : "It's a tie": 
} */


