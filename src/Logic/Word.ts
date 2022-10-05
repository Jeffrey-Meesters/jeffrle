import wonGame from "../templates/components/gameWon.html?raw";
import lostGame from "../templates/components/gameLost.html?raw";

export default class Word {
    #word: string;
    #guessedLetters: Array<string>;
    currentTypedWord: string;

    constructor(word: string) {
        this.#word = word;
        this.#guessedLetters = [];
        this.currentTypedWord = "";

        // update the guesses array with the amount of letters with empty strings
        // So that other methods can safely use the indexes
        for(let i = 0; i < word.length; i++) {
            this.#guessedLetters.push("");
        }
    }

    public addWordToDisplay(tries: number): void {
        const wordListwrapper = document.getElementById('word-lists');
        const list = document.createElement("ul");

        // Give current ul id of the number of tries for future reference
        list.setAttribute("id", `${tries}`)

        // For every letter in the word add a list item
        for(let i = 0; i < this.#word.length; i++) {
            const listElement = document.createElement("li");

            // the id is the current try and the index of the letter in the word + 1
            // For future reference
            listElement.setAttribute("id", `${tries}-${i + 1}`);
            listElement.classList.add("list-letter");
            listElement.classList.toggle("border-green", !!this.#guessedLetters[i]);
            listElement.innerText = this.#guessedLetters[i] || ".";
            list?.append(listElement);
        }

        wordListwrapper?.append(list);

        // A new line has started so reset the current typed word by the user
        this.currentTypedWord = "";
    }

    // Update the guessed letters array to keep track
    private updateGuessedLetters(letter: string, letterPosition: number) {
        this.#guessedLetters[letterPosition] = letter;
    }

    private occurencesInWord(letter: string) {
        return this.#word.split(letter).length -1;
    }

    private occurencesInTypedWord(letter: string) {
        return this.currentTypedWord.split(letter).length -1;
    }

    private updateColorCues(foundLetter: string, letterCount: number) {
        // Go back over the current typed list to see if
        // - the correct letter was already typed and has a yellow border
        // - when it has a yellow border check if it should stay
        //      - it should stay when the letter is still multiple times in the word and not all are guessed>
        //      - it should be removed if the amount of correct guesses has been reached for the letter
        
        const wordListsElem = document.querySelector('#word-lists');
        const currentListChildren = wordListsElem?.lastChild?.childNodes;

        // loop over all li elements before the current input
        for (let i = 0; i < (letterCount -1 ); i++) {
            
            // if a li element has the same letter AND has the border yellow remove it
            // if the letter is repeated but also multiple times with a yellow border it will be removed in the next itteration on correct input
            if (currentListChildren?.[i].textContent === foundLetter && (currentListChildren?.[i] as HTMLUListElement).classList.contains('border-yellow')) {
                (currentListChildren?.[i] as HTMLUListElement).classList.remove('border-yellow');
                break;
            }
        }
        
    }

    // Check if the letter is in the word and/or in the correct place and update styles
    private checkLetter(letter: string, letterCount: number, currentListItem: HTMLElement | null): void {
        // Something is wrong with the game
        if (!currentListItem) {
            return;
        }

        // Count how many times a letter exists in the word of the game
        const occurencesInWord = this.occurencesInWord(letter)

        // Count how many times a letter exists in the word typed by the user
        const occurencesInTypedWord = this.occurencesInTypedWord(letter);

        // When the word is added to the display an correct guessed letter may be present
        // If it is overwriten remove it so the next line part of the code is able to highlight it properly again
        currentListItem.classList.remove("border-green");

        // The typed letter is in exactly the same place as in the word of the game
        if (this.#word[letterCount -1] === letter) {
            this.updateGuessedLetters(letter, (letterCount - 1));
            currentListItem.classList.add("border-green");

            this.updateColorCues(letter, letterCount)
            return;
        }

        // When the letter is in the word of the game and the letter count in the word typed by the user
        // is lower than or equal to the occurences in the word of the game update the class
        if (!!this.#word.match(letter) && occurencesInTypedWord <= occurencesInWord) {
            currentListItem.classList.add("border-yellow");
            return;
        }
    }

    // Keep track of what the user has typed during this try
    private updateCurrentWord(letter: string): void {
        this.currentTypedWord += letter;
    }

    // Add letter to view in the letters list
    public addLetterToList(letter: string, tries: number, count: number): void {
        this.updateCurrentWord(letter);

        // use the amount of tries and the current type count to get the correct list item
        const currentListItem = document.getElementById(`${tries}-${count}`);
        currentListItem ? currentListItem.innerText = letter : '';

        // Check letter for style updates
        this.checkLetter(letter, count, currentListItem);
    }

    // Depending on the result show a winning or losing screen with the word
    showWord(result: boolean): void {
        const wordListwrapper = document.getElementById('word-lists');

        if (!wordListwrapper) return;

        wordListwrapper.innerHTML = result ? wonGame : lostGame;

        const list = document.createElement("ul");

        for(let i = 0; i < this.#word.length; i++) {
            const listElement = document.createElement("li");
            listElement.classList.add("list-letter", `${result ? 'won' : 'lost'}`)
            listElement.innerText = this.#word[i];
            list?.append(listElement);
        }

        wordListwrapper.append(list);
    }
}