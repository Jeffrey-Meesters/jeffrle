export default class Word {
    #word: string;
    currentTypedWord: string;

    constructor(word: string) {
        this.#word = word;
        this.currentTypedWord = "";
    }

    public addWordToDisplay(tries: number): void {
        // A new line has started so reset the current typed word by the user
        this.currentTypedWord = "";
        const wordListwrapper = document.getElementById('word-lists');
        const list = document.createElement("ul");

        // Give current ul id of the number of tries for future reference
        list.setAttribute("id", `${tries}`)

        // For every letter in the word add a list item
        for(let i = 0; i < this.#word.length; i++) {
            const listElement = document.createElement("li");

            // the id is the current try and the index of the letter in the word + 1
            // For future reference
            listElement.setAttribute("id", `${tries}-${i + 1}`)
            listElement.classList.add("list-letter")
            listElement.innerText = "."
            list?.append(listElement);
        }

        wordListwrapper?.append(list);
    }

    private checkLetter(letter: string, letterCount: number, currentListItem: HTMLElement | null): void {
        // Something is wrong with the game
        if (!currentListItem) {
            return;
        }

        // The typed letter is in exactly the same place as in the word of the game
        if (this.#word[letterCount -1] === letter) {
            currentListItem.classList.add("border-green");
            return;
        }

        // Count how many times a letter exists in the word of the game
        const occurencesInWord = this.#word.split(letter).length -1;

        // Count how many times a letter exists in the word typed by the user
        const occurencesInTypedWord = this.currentTypedWord.split(letter).length -1;

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
}