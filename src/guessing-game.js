class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.answer = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.answer = Math.ceil((this.max  + this.min) / 2)
        return this.answer
    }

    lower() {
        this.max = this.answer;
    }
    
    greater() {
        this.min = this.answer;
    }
}

module.exports = GuessingGame;