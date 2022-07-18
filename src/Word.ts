export default class Word {
    #word: string;
    constructor(word: string) {
        this.#word = word;
    }

    addWordToDisplay() {
        return this.#word;
    }
}