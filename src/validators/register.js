const positionValidators = require("./positionValidators");

const registerValidators = (manager) => {
    const validators = [
        positionValidators
    ]

    for(validator in validators){
        const val = new validator(manager).validate();
        if(val) exit;
    }
    validators.forEach(val => new val(manager).validate())
}


module.exports = registerValidators;