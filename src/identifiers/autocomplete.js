class Autocomplete {
  constructor(manager) {
    this.manager = manager;
  }

  validate(addedElement) {
    if (!addedElement) return;

    // this.manager.elContainsUnRelatedElements(addedElement).sameAxisX(addedElement);
    this.manager
      .valExist(addedElement)
      .elContainsUnRelatedElements(addedElement)
      .sameAxisX(addedElement)
      .isList(addedElement);
  }

  output(inputElem, addedElement) {
    const element = inputElem.element;
    element.style.border = '1px solid red';

    addedElement.style.border = '1px solid red';
    console.log('success');
  }
}

module.exports = {
  Autocomplete,
};
