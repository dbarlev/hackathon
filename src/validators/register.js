const PositionValidators = require("./positionValidators");
const DomValidators = require("./domValidators");
const AutoCompleteValidators = require("./autocompleteValidator");

const registerValidators = (manager) => {
    const validators = [
        PositionValidators,
        DomValidators,
        AutoCompleteValidators
    ]

    validators.forEach(validator => new validator(manager));
}


module.exports = registerValidators;