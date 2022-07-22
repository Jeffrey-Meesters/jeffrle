import Word from "./Word"
import Words from './Words'

export class Game {
  numberOfTries: number;
  #words: Array<string>;
  #chosenWord: string;
  #wordClass: Word;
  #letterCount = 0;
  #wonOrLost: boolean;

  constructor() {
    this.numberOfTries = 0;
    this.#words = [];
    this.#chosenWord = "";
    this.#wordClass = {} as Word;
    this.#wonOrLost = false;
  }

  private getWord(): string {
    // get a random number, but not higher then the lenght of the phrases array
    const randomNum = Math.floor(Math.random() * this.#words.length);
    // use the random number to take a phrase from the array
    this.#chosenWord = this.#words[randomNum];
    // return the #chosenWord
    return this.#chosenWord;
  };

  public startGame(): void {
    const words = new Words(6);
    this.#words = words.getWords();

    // get a random phrase
    const word = this.getWord();
    // initialize the Word class with the random phrase and tries 0
    this.#wordClass = new Word(word);

    // Start the first list of letters
    this.#wordClass.addWordToDisplay(this.numberOfTries);
  }

  public handleInterAction(letter: string): void {
    // Count letters to know the users progress
    this.#letterCount ++
    // Add the given letter to the list in screen
    this.#wordClass.addLetterToList(letter, this.numberOfTries, this.#letterCount)

    // When the letter count is 6 reset it, add up number of tries
    // and check if the user has now won or lost
    if (this.#letterCount === 6) {
      this.#letterCount = 0;
      this.numberOfTries++;

      this.checkWin();
    }
  }

  private endGame(): void {
    console.log("You won or lost");
  }

  private checkWin(): void {
    // When the currently typed word equals the word of the game the user has won
    if (this.#wordClass.currentTypedWord === this.#chosenWord) {
      console.log("WIN!");
      this.#wonOrLost = true;
      this.endGame();
      return;
    }

    // If the user has tried 5 times and has not won yet, the user has lost
    if (this.numberOfTries === 5 && !this.#wonOrLost) {
      this.#wonOrLost = true;
      console.log("LOST!");
      this.endGame();
      return;
    }

    // If the number of tries is less than 5 and the user has not won or lost yet
    // Continue with the next line of letters
    if (this.numberOfTries < 5 && !this.#wonOrLost) {
      this.#wordClass.addWordToDisplay(this.numberOfTries);
    }
  }
}