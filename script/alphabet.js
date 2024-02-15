// function play(){
//     const homesection =document.getElementById('home-screen');
//     homesection.classList.add('hidden');

//     const gameground = document.getElementById('play-ground');
//     gameground.classList.remove('hidden');
// }
function handelKeyupEvent(event){
    const playerPress = event.key;
    console.log(playerPress);
    if( playerPress === 'Escape'){
        gameOver()  
    }
    // console.log(playerPress);
    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetInnertext =  currentAlphabet.innerText;
    currentAlphabetLowercase = currentAlphabetInnertext.toLowerCase();
    // console.log(currentAlphabetLowercase);
    if(playerPress === currentAlphabetLowercase){
        randomAlphabet();
        removeBackgroundColorById(currentAlphabetLowercase);
        const element = findElementById('current-score');
        console.log(element);
        const newScore = element + 1;
        setNewScore('current-score',newScore);
        // score section 
        // const currentScore = document.getElementById('current-score');
        // const currentScoreText = currentScore.innerText;
        // const currentScoreInt = parseInt(currentScoreText);
        // // console.log(currentScoreInt);
        // // score increse system 
        // const newScore = currentScoreInt +1;
        // currentScore.innerText = newScore;

    }
    else{

        const lifeScoreElement = findElementById('current-life')
        // console.log('you lost your life');
        // const currentLife = document.getElementById('current-life');
        // const currentLifeText = currentLife.innerText;
        // const currentLifeInt = parseInt(currentLifeText);
        // console.log(currentLifeInt);
        const newLife = lifeScoreElement - 1;
        setNewScore('current-life',newLife)
        // currentLife.innerText = newLife
        if(lifeScoreElement === 1){
            gameOver();
        }
    }
   
}

document.addEventListener('keyup', handelKeyupEvent);

function randomAlphabet (){
    const random = alphabet();
    const displayAlpha = document.getElementById('current-alphabet');
    displayAlpha.innerText = random;
    addBackgroundColorById(random);
}
function play(){
    hideElement('home-screen');
    hideElement('scoreSection');
    showElement('play-ground');
    randomAlphabet ();
    // set current score and life 
    setNewScore('current-life',5);
    setNewScore('current-score',0);
}

function gameOver(){
    hideElement('play-ground');
    showElement('scoreSection');

    const lastScore = findElementById('current-score');
    console.log(lastScore);
    setNewScore('live-score',lastScore);
    const currentAlphabet = findElement('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}