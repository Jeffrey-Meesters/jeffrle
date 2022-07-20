import './style.css'
import homePage from "./templates/pages/home/homePage.html?raw"
import qwertyBoard from "./templates/components/qwertyBoard.html?raw"
import {Game} from "./Game"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = homePage;
document.querySelector<HTMLDivElement>('#qwerty-board')!.innerHTML = qwertyBoard

function markButton(event: KeyboardEvent) {
    console.log(event.key.toLocaleLowerCase())
    game.handleInterAction(event, event.key.toLowerCase())
}

// eventlistener that listens for clicks on the onscreen buttons
// document.querySelector<HTMLDivElement>('#qwerty-board')?.addEventListener('click', markButton);

// eventlistener that listens for keypresses on the keyboard
document.addEventListener("keypress", markButton);

const game = new Game();

game.startGame()