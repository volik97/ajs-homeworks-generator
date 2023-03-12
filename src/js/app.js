export default class Team {
  constructor() {
    this.sumChar = 0;
    this.team = [];
  }

  add(character) {
    this.team.push(character);
    this.sumChar++;
  }

  // for test
  addAll(...characters) {
    for (const item of characters) {
      this.team.push(item);
      this.sumChar++;
    }
  }

  * [Symbol.iterator]() {
    for (let current = 0; current < this.sumChar; current++) {
      yield this.team[current];
    }
  }
}
