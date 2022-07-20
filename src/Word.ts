export default class Word {
    #word: string;

    constructor(word: string) {
        this.#word = word;
    }

    addWordToDisplay(tries: number) {
        const wordListwrapper = document.getElementById('word-lists');
        for (let k = 0; k <= tries; k++) {
            const list = document.createElement("ul");
            list.setAttribute("id", `${k}`)
            for(let i = 0; i < this.#word.length; i++) {
                const listElement = document.createElement("li");
                listElement.setAttribute("id", `${k}-${this.#word[i]}`)
                listElement.classList.add("list-letter")
                listElement.innerText = "."
                list?.append(listElement);
            }
            wordListwrapper?.append(list);
        }
        
    }

    checkLetter(letter: string, letterCount: number) {
        return !!this.#word.match(letter) && this.#word[letterCount] === letter;
    }

    addLetterToList(letter: string, letterIsInWord: boolean, tries: number) {
        if (letterIsInWord) {
            const currentListItem = document.getElementById(`${tries}-${letter}`);
            currentListItem ? currentListItem.innerText = letter : '';
        }
    }
}