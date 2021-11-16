const identifiersManger = require("./manager")
const registerIdentifier = require("./identifiers/register")
const registerValidators = require("./validators/register")

class Startup {
    init(){
        //TODO: daniel - event and observer are invoked here
        registerValidators(identifiersManger);
        this.register();
    }

    register(){
        registerIdentifier(new identifiersManger());
    }
}

new Startup().init();