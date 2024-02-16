function hideElementById(idName){
    const section = document.getElementById(idName);
    section.classList.add('hidden');
}

function showElementById(idName){
    const section = document.getElementById(idName);
    section.classList.remove('hidden');
}



const characters ='abcdefghijklmnopqrstuvwzyz/';

function generateCharacter(length){
    let result = ' ';
    const charactersLength = characters.length;
    for(let i =0; i<length; i++){
        result +=characters.charAt(Math.floor(Math.random()*charactersLength)) 
    }
    
    return result;
}

function showAlphabet(idName){
    const alphabet = generateCharacter(1);
    const alphabetElement = document.getElementById(idName);
    alphabetElement.innerText=alphabet;
}

function getTextElementValueById(idName){
    const currentLifeScoreElement = document.getElementById(idName);
        const currentLifeScoreText = currentLifeScoreElement.innerText;
        const currentLifeScore = parseInt(currentLifeScoreText);

        return currentLifeScore;
}

function setTextElementValueById(idName,value){
    const currentUpdateScoreElement = document.getElementById(idName);
        currentUpdateScoreElement.innerText=value;
}

function setBackgroundColor(idName){
    const element = document.getElementById(idName);
    // console.log(element);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColor(idName){
    const element = document.getElementById(idName);
    element.classList.remove('bg-orange-400');
}

function clearBackgroundColor(){
    const colorKeys= document.querySelectorAll('.bg-orange-400');
    for(const colorKey of colorKeys){
        //console.log(colorKey);
        colorKey.classList.remove('bg-orange-400');
    }
}
