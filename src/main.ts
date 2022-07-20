import './style.css'
import homePage from "./templates/pages/home/homePage.html?raw"
import qwertyBoard from "./templates/components/qwertyBoard.html?raw"
import {Game} from "./Game"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = homePage;
document.querySelector<HTMLDivElement>('#qwerty-board')!.innerHTML = qwertyBoard

const game = new Game();

game.startGame()