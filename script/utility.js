function hideElement(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElement(elementId2){
    const elementShow = document.getElementById(elementId2);
    elementShow.classList.remove('hidden');
}
function addBackgroundColorById(element){
    const background = document.getElementById(element);
    background.classList.add('bg-orange-500');
}

function alphabet(){
    const alphaberString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphaberString.split('');
    // console.log(alphabetArray);
    const numberRandom = Math.random()*25;
    const index = Math.round(numberRandom);
    const alphabet = alphabetArray[index];
    // console.log(alphabet);
    return alphabet;
}