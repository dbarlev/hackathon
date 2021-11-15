const autocomplete = require("./autocomplete");

const registerIdentifier = (manager) => {
    const identifiers = [
        autocomplete
    ]

    identifiers.forEach(val => new val(manager))
}


module.exports = registerIdentifier;