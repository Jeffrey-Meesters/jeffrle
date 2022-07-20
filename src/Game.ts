import Word from "./Word"

export class Game {
  numberOfTries: number;
  #words: Array<string>;
  #chosenWord: string;
  #wordClass: Word;
  #letterCount = 0

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

  public startGame(): void {
    // get a random phrase
    const word = this.getWord();
    // initialize the Word class with the random phrase and tries 0
    this.#wordClass = new Word(word);
    this.#wordClass.addWordToDisplay(this.numberOfTries);
  }

  handleInterAction(event: KeyboardEvent, letter: string) {
    const letterIsInWord = this.#wordClass.checkLetter(letter, this.#letterCount)
    this.#letterCount ++
    console.log(letterIsInWord)
    this.#wordClass.addLetterToList(letter, letterIsInWord, this.numberOfTries)

    if (this.#letterCount === 6) {
      this.#letterCount = 0;
      this.numberOfTries = 1;
    }
  }
}