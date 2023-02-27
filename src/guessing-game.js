class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.candidat = Math.round((this.min + this.max) / 2);
        return this.candidat;
    }

    lower() {
        this.max = this.candidat;
        return this.max;
    }


    greater() {
        this.min = this.candidat;
        return this.min;
    }
}

module.exports = GuessingGame;
