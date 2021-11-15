const positionValidators = require("./positionValidators");

const registerValidators = (manager) => {
    const validators = [
        positionValidators
    ]

    validators.forEach(val => new val(manager))
}


module.exports = registerValidators;