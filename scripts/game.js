sessionStorage.userScore = 0;
sessionStorage.roboScore = 0;

// Function to make computer random choices
function roboChoice(){
    let randomNumber = Math.floor(Math.random() * 3);

    let choiceUponNumber;

    switch(randomNumber){
        case(0):
            document.getElementById("computerChoice").src = "../images/rock.png";
            choiceUponNumber = "rock";
            break;
        case(1):
            document.getElementById("computerChoice").src = "../images/paper.png";
            choiceUponNumber = "paper";
            break;
        case(2):
            document.getElementById("computerChoice").src = "../images/scissors.png";
            choiceUponNumber = "scissors";
            break;
    }

    return choiceUponNumber;
}








// It compares player choice and computer choice and out result
function compare(userChoice){
    let robotChoice = roboChoice();
    let score;

    if(userChoice == robotChoice){
        score = 2;
    }
    else if(userChoice == "rock" && robotChoice == "scissors"){
        score = 1;
    }
    else if(userChoice == "scissors" && robotChoice == "rock"){
        score = 0;
    }
    else if(userChoice == "paper" && robotChoice == "rock"){
        score = 1;
    }
    else if(userChoice == "rock" && robotChoice == "paper"){
        score = 0;
    }
    else if(userChoice == "paper" && robotChoice == "scissors"){
        score = 0;
    }
    else if(userChoice == "scissors" && robotChoice == "paper"){
        score = 1;
    }
    else{
        score = 2;
    }   

    return score;

}









// Counting Scores for computer and player
function playerScore(num1){
    
    if(num1 == 1){
        sessionStorage.userScore = Number(sessionStorage.userScore) + 1;
    }
    else{
        sessionStorage.userScore = Number(sessionStorage.userScore) + 0;
    }

    document.getElementById('pScore').innerHTML = sessionStorage.userScore;
}

function computerScore(num2){
    
    if(num2 == 0){
        sessionStorage.roboScore = Number(sessionStorage.roboScore) + 1;
    }
    else{
        sessionStorage.roboScore = Number(sessionStorage.roboScore) + 0;
    }


    document.getElementById('cScore').innerHTML = sessionStorage.roboScore;

}

function countScore(num){
    playerScore(num);
    computerScore(num);
}







// These are on click functions when click it make computer to make a deceision and count points too
function rock(){
    document.getElementById("playerChoice").src = "../images/rock.png";
    let rock = compare('rock');
    countScore(rock);
    checkForWinner();
}

function paper(){
    document.getElementById("playerChoice").src = "../images/paper.png"; 
    let paper = compare('paper');
    countScore(paper);
    checkForWinner();
}

function scissors(){
    document.getElementById("playerChoice").src = "../images/scissors.png";
    let scissors = compare('scissors');
    countScore(scissors);
    checkForWinner();
}


function checkForWinner(){
    let robo = document.getElementById("cScore").innerHTML;
    let player = document.getElementById("pScore").innerHTML;
    
    
    if(robo == '5'){  
        setTimeout(function(){
            window.location = "../html/resultlose.html"; 
        }, 1500);
    }
    else if(player == '5'){
        setTimeout(function(){
            window.location = "../html/resultwin.html"; 
        }, 1500);
    }    
}



