export default class Word {
    #word: string;
    currentTypedWord: string;

    constructor(word: string) {
        this.#word = word;
        this.currentTypedWord = "";
    }

    addWordToDisplay(tries: number): void {
        const wordListwrapper = document.getElementById('word-lists');
        const list = document.createElement("ul");
        list.setAttribute("id", `${tries}`)

        for(let i = 0; i < this.#word.length; i++) {
            const listElement = document.createElement("li");
            listElement.setAttribute("id", `${tries}-${i + 1}`)
            listElement.classList.add("list-letter")
            listElement.innerText = "."
            list?.append(listElement);
        }
        wordListwrapper?.append(list);
        
        // Temporary to show word thus make development easier
        wordListwrapper?.append(`${this.#word}`);
    }

    checkLetter(letter: string, letterCount: number, currentListItem: HTMLElement | null): void {
        if (!currentListItem) {
            return;
        }

        if (this.#word[letterCount -1] === letter) {
            currentListItem.classList.add("border-green");
            return;
        }

        const occurencesInWord = this.#word.split(letter).length -1;
        const occurencesInTypedWord = this.currentTypedWord.split(letter).length -1;

        if (!!this.#word.match(letter) && occurencesInTypedWord <= occurencesInWord) {
            currentListItem.classList.add("border-yellow");
            return;
        }
    }

    updateCurrentWord(letter: string): void {
        this.currentTypedWord += letter;
    }

    addLetterToList(letter: string, tries: number, count: number): void {
        this.updateCurrentWord(letter);
        const currentListItem = document.getElementById(`${tries}-${count}`);
        currentListItem ? currentListItem.innerText = letter : '';

        this.checkLetter(letter, count, currentListItem);
    }
}