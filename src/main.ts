import './assets/styles/style.css';
import homePage from "./templates/pages/home/homePage.html?raw";
import qwertyBoard from "./templates/components/qwertyBoard.html?raw";
import {Game} from "./Logic/Game";

// Add home page to main page
document.querySelector<HTMLDivElement>('#app')!.innerHTML = homePage;

// Add qwerty component to home page
document.querySelector<HTMLDivElement>('#qwerty-board-letters')!.innerHTML = qwertyBoard;

function makeSureLetterIsALetter(letter:string) {
    const letterReg = /[a-z]/g;
    // check if the letter is actually a letter
    return letter.match(letterReg);
}

function markButton(event: KeyboardEvent | MouseEvent) {
    if (event instanceof KeyboardEvent) {
        const letter = event.key.toLowerCase();

        // only allow letters
        if (makeSureLetterIsALetter(letter)) {
            game.handleInterAction(letter);
        }
    }

    if (event instanceof MouseEvent && event) {
        const targetEvent = (event.target as HTMLElement);
        const letter = targetEvent.innerText;

        // Only allow letters (in case user tempers with the html)
        if(makeSureLetterIsALetter(letter)) {
            game.handleInterAction(letter);
        }
    }
}

// eventlistener that listens for keypresses on the keyboard
document.addEventListener("keypress", markButton);

// eventlistener that listens for clicks on the onscreen buttons
document.querySelector<HTMLDivElement>('#qwerty-board-letters')?.addEventListener('click', markButton);

// Make a new instance of the Game
const game = new Game();
// Start the Game
game.startGame();