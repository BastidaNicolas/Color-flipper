//Generates random hex colors with these values in the array
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

//Selecting elements in HTML
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//Event listiners
btn.addEventListener('click', function (){
    //set color value
    let hexColor = '#';

    //Loop through to fill hex value 6 times
    for(i = 0; i < 6; i++){
        //Adds a value from the array randomly
        hexColor += hex[randomNumberGenerator()];
    }
    //changes text in HTML
    color.textContent = hexColor;
    //Changes background color in HTML body
    document.body.style.backgroundColor = hexColor;
});

//Generates random number based on the lenght of the array Math.floor rounds down the decimals
function randomNumberGenerator (){
    return Math.floor(Math.random()*hex.length);
}