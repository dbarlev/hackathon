const {Autocomplete} = require("./autocomplete");

const registerIdentifier = (manager) => {
    const identifiers = [
        Autocomplete
    ]

    for(let identifier of identifiers){
        try {
            const isValid = new identifier(manager).validate();
            if(isValid) break;
        } catch (error) {
            // handle errors
        }
    }
}


module.exports = registerIdentifier;