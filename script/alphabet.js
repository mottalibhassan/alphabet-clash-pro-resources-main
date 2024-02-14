// function play(){
//     const homesection =document.getElementById('home-screen');
//     homesection.classList.add('hidden');

//     const gameground = document.getElementById('play-ground');
//     gameground.classList.remove('hidden');
// }
function randomAlphabet (){
    const random = alphabet();
    const displayAlpha = document.getElementById('current-alphabet');
    displayAlpha.innerText = random;
    addBackgroundColorById(random);
}
function play(){
    hideElement('home-screen');
    showElement('play-ground');
    randomAlphabet ();
}