class Autocomplete {
  constructor(manager) {
    this.manager = manager;
  }

    constructor(manager){
        this.manager = manager;
    }

    validate(addedElement){
        this.manager.sameAxisX().hasLinks().valExist(addedElement);
        this.output();
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
