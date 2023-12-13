class Calculatrice {
  sum: number;
  constructor() {
    this.sum = 0;
  }

  add(x: number) {
    this.sum = this.sum + x;
    return this;
  }
  mul(x: number) {
    this.sum = this.sum * x;
    return this;
  }
  sub(x: number) {
    this.sum = this.sum - x;
    return this;
  }
  div(x: number) {
    if (x === 0) {
      return this;
    }
    this.sum = this.sum / x;

    return this;
  }

  addList(list: number[]) {
    this.sum = this.sum + list.reduce((a, b) => a + b, 0);

    return this;
  }
}

const test = new Calculatrice();

console.log(test.add(5).add(5).sub(2).div(1)?.mul(5).div(0));
