import words from "../data/words";

export default class Words {
    amount: number;
    constructor(amount = 6) {
        this.amount = amount
    };

    public getWords() {
        return words.filter(word => word.length === this.amount);
    }
}