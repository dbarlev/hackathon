
class Autocomplete {

    constructor(manager){
        this.manager = manager;
    }

    validate(addedElement){
        if(!addedElement) return;

        this.manager.sameAxisX().valExist(addedElement);
        this.output();
    }

    output(){
        console.log("success");
    }
}

module.exports = {
    Autocomplete
};