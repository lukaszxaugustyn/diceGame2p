const scorePlayerOne=document.querySelector('#scoreOne');
const scorePlayerTwo=document.querySelector('#scoreTwo');
const CurrentPlayerOne=document.querySelector('#cScoreOne');
const CurrentPlayerTwo=document.querySelector('#cScoreTwo');
const holdButton=document.querySelector('#hold');
const rollButton=document.querySelector('#roll');
const diceImage=document.querySelector('#diceImg');
const roundLabel=document.querySelector('#round');
const dPlayerL=document.querySelector('#pLeft');
const dPlayerR=document.querySelector('#pRight');
let roundPlayerOne = true;
const hoverGreen ='background: #11998e;background: -webkit-linear-gradient(to bottom, #38ef7d, #11998e);background: linear-gradient(to bottom, #38ef7d, #11998e);'


const playerOne = {
    name:'Player 1',
    score: 0,
    currentScore: 0,
    

}

const playerTwo = {
    name:'Player 2',
    score: 0,
    currentScore: 0,
    

}

const roll = () => {
    if (roundPlayerOne) {
        diceRollplayerOne(); 
    } else { 
        diceRollplayerTwo(); 
    }
}

const hold = () => {
    if (roundPlayerOne) {
        holdOne();  
    } else {
         holdTwo();   
    }
}

const diceRollplayerOne = () => {
    let diceRoll = Math.floor( Math.random() * 6 ) +1;
    diceImage.src=`img/dice${diceRoll}.png`
    if ( diceRoll == 1) {
        playerOne.score= 0;
        playerOne.currentScore= 0;
        scorePlayerOne.innerHTML='0';
        CurrentPlayerOne.innerHTML='0';
        roundPlayerOne =false;
        roundLabel.innerHTML ='PLAYER 2 ROUND'
        dPlayerL.style.background='transparent'
        dPlayerR.style= hoverGreen;
    }else {
        playerOne.currentScore += diceRoll;
        CurrentPlayerOne.innerHTML= playerOne.currentScore
            if (playerOne.score > 20 || playerOne.currentScore > 20) {
                winPlayerOne()
            }    
    }
}

const diceRollplayerTwo = () => {
    let diceRoll = Math.floor( Math.random() * 6 ) +1;
    diceImage.src=`img/dice${diceRoll}.png`
    if ( diceRoll == 1) { 
        playerTwo.score= 0;
        playerTwo.currentScore= 0;
        scorePlayerTwo.innerHTML='0';
        CurrentPlayerTwo.innerHTML='0';
        roundPlayerOne = true;
        roundLabel.innerHTML ='PLAYER 1 ROUND'
        dPlayerR.style.background='transparent'
        dPlayerL.style= hoverGreen;  
    }else {
        playerTwo.currentScore += diceRoll;
        CurrentPlayerTwo.innerHTML= playerTwo.currentScore
            if (playerTwo.score > 20 || playerTwo.currentScore > 20) {
                winPlayerTwo()
            }  
    }
}


const holdOne = () => {
    playerOne.score += playerOne.currentScore;
    playerOne.currentScore = 0;
    CurrentPlayerOne.innerHTML=  playerOne.currentScore;
    scorePlayerOne.innerHTML= playerOne.score;
    roundPlayerOne = false;
    roundLabel.innerHTML ='PLAYER 2 ROUND'
    dPlayerL.style.background='transparent'
    dPlayerR.style= hoverGreen;
        if (playerOne.score > 20) {
            winPlayerOne()
    }
}

const holdTwo = () => {
    playerTwo.score += playerTwo.currentScore;
    playerTwo.currentScore = 0;
    CurrentPlayerTwo.innerHTML=  playerTwo.currentScore;
    scorePlayerTwo.innerHTML= playerTwo.score;
    roundPlayerOne = true;
    roundLabel.innerHTML ='PLAYER 1 ROUND'
    dPlayerR.style.background='transparent'
    dPlayerL.style= hoverGreen;
        if (playerTwo.score > 20) {
            winPlayerTwo()
    }

}

const winPlayerOne = () => {
    roundLabel.innerHTML= 'PLAYER 1 WIN'
    scorePlayerOne.innerHTML= playerOne.score;
    holdButton.style.display='none';
    rollButton.style.display='none';

}

const winPlayerTwo = () => {
    roundLabel.innerHTML= 'PLAYER 2 WIN!'
    scorePlayerTwo.innerHTML= playerTwo.score;
    holdButton.style.display='none';
    rollButton.style.display='none';
}

const newGame = () => {
    location.reload();
}



