class Autocomplete {
  constructor(manager) {
    this.manager = manager;
  }

  validate(addedElement) {
    if (!addedElement) return;

    this.manager.sameAxisX(addedElement).valExist(addedElement).elContainsUnrelatedElements(addedElement).isList(addedElement);
    this.output();
  }

  output() {
    console.log('success');
  }
}

module.exports = {
  Autocomplete,
};
