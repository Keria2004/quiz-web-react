// Class trong JS

class Animal {
  constructor() {}

  doAction() {
    return "GO GO AWAY";
  }
}

class Dog extends Animal {
  constructor(model) {
    super();
    this.model = model;
  }
}
