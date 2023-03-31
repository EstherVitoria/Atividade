// Import stylesheets
import './style.css';

// Write Javascript code!
const btn = document.getElementById("btn");
const lb = document.getElementById("dice-value");

function playDice () {
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

btn.addEventListener('click', () => {
    let result = playDice();
    console.log(result);
    lb.textContent = result;
});