const arr=["rock", "paper", "scissors"];
const playGameButton = document.getElementById("playButton");

function chooseOption () {
    return arr[Math.floor(arr.length * Math.random())];
}

playGameButton.addEventListener("click", function play() {
    let computer = chooseOption (); 
    let computersImagineChoice= document.getElementById("computersImagine");
    computersImagineChoice.src= `./photos/${computer}.JPG`;
    computersImagineChoice.style.display = "block";

    let user = chooseOption ();
    let usersImagineChoice= document.getElementById("usersImagine");
    usersImagineChoice.src= `./photos/${user}.JPG`;
    usersImagineChoice.style.display = "block";

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
        usersImagineChoice.src= `./photos/${user}-looser.JPG`;
    }
    else {
        let matchResultComputer= document.getElementById("matchResultComputer");
        matchResultComputer.innerText = "Looser :(";
        matchResultComputer.style.color= "#d11313";
        computersImagineChoice.src= `./photos/${computer}-looser.JPG`;

        let matchResultUser= document.getElementById("matchResultUser");
        matchResultUser.innerText = "Winner!!!";
        matchResultUser.style.color = "#32b828";
    }
});



