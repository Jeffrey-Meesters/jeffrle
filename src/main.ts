import './style.css'
import homePage from "./templates/pages/homePage.html?raw"
import qwertyBoard from "./templates/components/qwertyBoard.html?raw"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = homePage;
document.querySelector<HTMLDivElement>('#qwerty-board')!.innerHTML = qwertyBoard
