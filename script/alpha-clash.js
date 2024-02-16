// function play(){
//     const homeScreen=document.getElementById('home-screen');
//     homeScreen.classList.toggle('hidden');
//     const playGroundScreen = document.getElementById('playGround-screen');
//     playGroundScreen.classList.toggle('hidden');

// }
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    //console.log('player pressed', playerPressed);

    if(playerPressed==='Escape'){
        gameOver();
    }

    const element = document.getElementById('alphabet').innerText;
    const currentAlphabet=element.toLocaleLowerCase();
    //console.log('expected alphabet', currentAlphabet);
    
    if(playerPressed===currentAlphabet){

        // update score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        //currentScoreElement.innerText=newScore;
        const currentScore = getTextElementValueById('current-score');
        //console.log(currentScore);
        const newScore = currentScore + 1;

        setTextElementValueById('current-score', newScore);

        //update score in score screen 
        // const currentUpdateScoreElement = document.getElementById('update-score');
        // currentUpdateScoreElement.innerText=newScore;

        setTextElementValueById('update-score',newScore);
        
        

        // play continue
        removeBackgroundColor(currentAlphabet);
        continueGame();
    }
    else{
        // const currentLifeScoreElement = document.getElementById('life-score');
        // const currentLifeScoreText = currentLifeScoreElement.innerText;
        // const currentLifeScore = parseInt(currentLifeScoreText);

        const currentLifeScore = getTextElementValueById('life-score');

        const newLifeScore = currentLifeScore-1;
        //currentLifeScoreElement.innerText=newLifeScore;
        setTextElementValueById('life-score', newLifeScore);
        if(newLifeScore===0){
            gameOver();
             
            removeBackgroundColor(playerPressed);
        }
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    showAlphabet('alphabet');
    const element = document.getElementById('alphabet');
    const alphabet = element.innerText;
    // console.log(alphabet.toLowerCase());
    setBackgroundColor(alphabet.toLowerCase());

}

function play(){
    hideElementById('home-screen');
    showElementById('playGround-screen');
    continueGame();
}

function playAgain(){
    hideElementById('score-ground');
    showElementById('home-screen');
    console.log('this is click');
    clearBackgroundColor();
}

function gameOver(){
            hideElementById('playGround-screen');
            showElementById('score-ground');
            setTextElementValueById('current-score',0);
            setTextElementValueById('life-score',5);
}