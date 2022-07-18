import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import homePage from "./templates/pages/homePage.html?raw"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = homePage;
document.querySelector<HTMLImageElement>('#vanillaTSLogo')!.src = typescriptLogo
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
