class Autocomplete {
  constructor(manager) {
    this.manager = manager;
  }

  validate() {
    this.manager.sameAxisX().hasLinks().isInputValueExists();
    this.markDom();
  }

  markDom() {
    console.log('success');
  }
}

module.exports = {
  Autocomplete,
};
