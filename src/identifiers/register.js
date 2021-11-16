const { Autocomplete } = require('./autocomplete');

const registerIdentifier = (manager, addedElement) => {
  const identifiers = [Autocomplete];

  for (let identifier of identifiers) {
    try {
      const instance = new identifier(manager);
      const inputElem = window.u1Autocomplete;
      instance.validate(addedElement);
      instance.output(inputElem, addedElement);
      break;
    } catch (error) {
      // handle errors
    }
  }
};

module.exports = registerIdentifier;
