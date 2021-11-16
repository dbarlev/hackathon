class Autocomplete {
  constructor(manager) {
    this.manager = manager;
  }

  validate() {
    this.manager.sameAxisX().hasLinks().isInputValueExists();
    this.markDom();
  }

  markDom() {
    const elem = window.u1Autocomplete.element;
    elem.style.border = '1px solid red';
    console.log('success');
  }
}

module.exports = {
  Autocomplete,
};
