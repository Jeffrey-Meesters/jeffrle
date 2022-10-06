# Jeffrle

## Intro
This application has been started to have a play with Vite.  
Vite is a way of bundling that takes advantages of advancements in the current JS ecosystem to bring down build and compile times while also using a smart way of hot reloading during development.  
Under the hood it makes use of Rollup so one of the ways we can customise Vite is in the `vite.config.js` under the rollupOptions.

## Application
The application is based on the game Wordle as it resambled a bit a game I already build a while ago: [Phrase hunter](https://github.com/Jeffrey-Meesters/Treehouse-OOP-Game-Phrase-hunter); which I have now greatly extended into this game.  
Jeffrle is hosted via github pages and can be played [here](https://jeffrey-meesters.github.io/jeffrle/).

## Vite alterations so far
1. I've set a different base url as gethub actions was not able to create a usable deployment with absolut url which turned the bundled code into using relative urls
2. I've added a package [rollup-plugin-javascript-obfuscator](https://www.npmjs.com/package/rollup-plugin-javascript-obfuscator) that obfuscates the code so it is harder to read by a human in the browser.