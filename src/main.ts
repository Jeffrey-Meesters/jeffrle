import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import homePage from "./templates/pages/homePage.html?raw"
import qwertyBoard from "./templates/components/qwertyBoard.html?raw"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = homePage;
document.querySelector<HTMLImageElement>('#vanillaTSLogo')!.src = typescriptLogo
document.querySelector<HTMLDivElement>('#qwerty-board')!.innerHTML = qwertyBoard
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
