// Roll the dice to begin the game 

// The dice appears on the first roll 

// When a dice is rolled, the score adds up 

// Once the score passed, 20, you win.

// However, if you hit ‘1’ then you lose (if less than score of 20) 

// If the player won or lost, the player can start the game again 

// You may want to change the score to any number other than 20

const scoreHTML=document.querySelector('#score');
const buttonRoll=document.querySelector('#roll');
const diceImage=document.querySelector('#diceImg');
const containerLogin=document.querySelector('#containerLogin');
const containerGame=document.querySelector('#containerGame');

// containerGame.style.display='none';




const player = {
    name:'Player',
    score: 0,

}





const diceRoll = () => {
    let diceRoll = Math.floor( Math.random() * 6 ) +1;
    diceImage.style.display='block';
    diceImage.src=`img/dice${diceRoll}.png`

    if ( diceRoll == 1) { 
        player.score= 0;
        scoreHTML.innerHTML= 'You Loose!';
        buttonRoll.style.display ='none';
        
        
        
    }else {
        player.score += diceRoll;
        scoreHTML.innerHTML= player.score;

            if (player.score > 20) {
                win()

            }
        
    }
}
    

const win = () => {
    scoreHTML.innerHTML= 'You WIN!'
    buttonRoll.style.display ='none';
}

const restart = () => {
    diceImage.style.display='none';
    player.score = 0;
    buttonRoll.style.display ='block';
    scoreHTML.innerHTML= player.score;
}
