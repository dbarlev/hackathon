const { Autocomplete } = require('./autocomplete');

const registerIdentifier = (manager, addedElement) => {
  const identifiers = [Autocomplete];

  for (let identifier of identifiers) {
    try {
      const instance = new identifier(manager);
      const isValid = instance.validate(addedElement);
      instance.output();
      break;
    } catch (error) {
      // handle errors
    }
  }
};

module.exports = registerIdentifier;
