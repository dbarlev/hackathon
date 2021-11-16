class AutoCompleteValidators {
  constructor(manager) {
    this.manager = manager;
    this.register();
  }

  register() {
    this.manager.prototype.isInputValueExists = this.isInputValueExists;
  }

  isInputValueExists(text, element) {
    return this;
  }
}

module.exports = AutoCompleteValidators;
