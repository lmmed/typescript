class Calculator {
    #lastResult = 0;
    constructor() {}

    set addition(val1: number) {
        this.#lastResult = val1 ;
    }

    additionList(values: number[]) {
        return this.#lastResult = values.reduce((a,b) => a + b, 0);
    }

    get result() {
        return this.#lastResult;
    }
}

const t = new Calculator();

t.addition