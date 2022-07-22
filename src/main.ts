import './style.css'
import homePage from "./templates/pages/home/homePage.html?raw"
import qwertyBoard from "./templates/components/qwertyBoard.html?raw"
import {Game} from "./Game"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = homePage;
document.querySelector<HTMLDivElement>('#qwerty-board')!.innerHTML = qwertyBoard

function markButton(event: KeyboardEvent | MouseEvent) {
    if (event instanceof KeyboardEvent) {
        game.handleInterAction(event.key.toLowerCase())
    }

    if (event instanceof MouseEvent && event) {
        const targetEvent = (event.target as HTMLElement)
        game.handleInterAction(targetEvent.innerText);
    }
}

// eventlistener that listens for keypresses on the keyboard
document.addEventListener("keypress", markButton);

// eventlistener that listens for clicks on the onscreen buttons
document.querySelector<HTMLDivElement>('#qwerty-board')?.addEventListener('click', markButton);

const game = new Game();

game.startGame()