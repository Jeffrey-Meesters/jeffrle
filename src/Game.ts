import Word from "./Word"

export default class Game {
  numberOfTries: number;
  #words: Array<string>;
  #chosenWord: string;
  #wordClass: Word;

  constructor() {
    this.numberOfTries = 0;
    this.#words = ['accept', 'acting', 'famous', 'exceed', 'factor', 'reward']
    this.#chosenWord = "";
    this.#wordClass = {} as Word;
  }

  getWord(): string {
    // get a random number, but not higher then the lenght of the phrases array
    const randomNum = Math.floor(Math.random() * this.#words.length);
    // use the random number to take a phrase from the array
    this.#chosenWord = this.#words[randomNum];
    // return the #chosenWord
    return this.#chosenWord;
  };

  startGame(): void {
    // if the textcontent of the btn__reset equals Reset Game then reload the page
    // to reset all values and return false > now the overlay will show with Start Game button
    // if (document.getElementById('btn__reset').textContent === 'Reset Game') {
    //   window.location.reload(true);
    //   return false;
    // }

    // get a random phrase
    const word = this.getWord();
    // initialize the Phrase class with the random phrase
    this.#wordClass = new Word(word);
    this.#wordClass.addWordToDisplay();
  }
}