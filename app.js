/* jshint esversion: 6 */
const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
const startBtn = document.querySelector('#start');

let result = 0;
let currentTime = timeLeft.textContent;
let timerId1 = null, timerId2 = null;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    });
    setTimeout(function () {
        let randomPosition = square[Math.floor(Math.random() * 9)];
        randomPosition.classList.add('mole');
        // assign the id of the randomPosition to hitPosition for us to use later
        hitPosition = randomPosition.id;
    }, 150);
}

// function moveMole() {
//     timerId1 = setInterval(randomSquare, 1000);
// }

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime === 0) {
        clearInterval(timerId1);
        clearInterval(timerId2);
        alert('GAME OVER! Your final score is ' + result);
        currentTime = 60;
    }
}

function playPause() {
    //moveMole();
    result = 0;
    currentTime = 60;
    timerId1 = setInterval(randomSquare, 1000);
    timerId2 = setInterval(countDown, 1000);
}

square.forEach(item => {
    item.addEventListener('mousedown', () => {
        if(item.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})

startBtn.addEventListener('click', playPause); // { , once: true });



