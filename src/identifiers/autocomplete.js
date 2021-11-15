const identifiersManger = require("./identifiers/manager")

class autocomplete{

    constructor(manager){
        this.manager = manager;
    }

    validate(){
        let isValid = true;

        try {
            this.manager().sameAxisX();
        } catch (error) {
            isValid = false;
        }

        return isValid;
    }
}

module.export = autocomplete