class Autocomplete {
  constructor(manager) {
    this.manager = manager;
  }

  validate(addedElement) {
    if (!addedElement) return;

    this.manager.elContainsUnRelatedElements(addedElement);
    this.output();
  }

  output(addedElement) {
    const elem = window.u1Autocomplete.element;
    elem.style.border = '1px solid red';

    addedElement.style.border = '1px solid red';
    console.log('success');
  }
}

module.exports = {
  Autocomplete,
};
