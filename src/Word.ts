export default class Word {
    #word: string;
    #tries: number

    constructor(word: string, tries: number) {
        this.#word = word;
        this.#tries = tries;
    }

    addWordToDisplay() {
        const wordListwrapper = document.getElementById('word-lists');
        for (let k = 0; k <= this.#tries; k++) {
            const list = document.createElement("ul");
            list.setAttribute("id", `${k}`)
            for(let i = 0; i < this.#word.length; i++) {
                const listElement = document.createElement("li");
                listElement.setAttribute("id", `${k}-${i}`)
                listElement.classList.add("list-letter")
                listElement.innerText = "."
                list?.append(listElement);
            }
            wordListwrapper?.append(list);
        }
        
    }
}