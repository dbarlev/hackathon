
class Autocomplete {

    constructor(manager){
        this.manager = manager;
    }

    validate(addedElement){
        this.manager.sameAxisX().hasLinks().isInputValueExists();
        this.output();
    }

    output(){
        console.log("success");
    }
}

module.exports = {
    Autocomplete
};