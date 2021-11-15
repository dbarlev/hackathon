const identifiersManger = require("./manager")
const registerIdentifier = require("./identifiers/register")
const registerValidators = require("./validators/register")

class Startup {
    init(){
        //TODO: daniel - event and observer are invoked here
        this.register();
    }

    register(){
        const manager = new identifiersManger();
        registerValidators(manager);
        registerIdentifier(manager);
    }
}

new Startup().init();