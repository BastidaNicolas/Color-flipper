//This uses a set number of colors in the array, doesnt generate random numbers
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

//Get elements from HTML
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//Event Listiners: checks if something happend in HTML

//What happens when you click on button
btn.addEventListener('click', function () {
    //Generates random number 0-3
    const randomNumber = getRandomNumber();
    //Makes background color of the page's body change
    document.body.style.backgroundColor = colors[randomNumber];
    //changes color displayed in text
    color.textContent = colors[randomNumber];
});

//Generates random number based on the lenght of the array Math.floor rounds doun the decimals
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}