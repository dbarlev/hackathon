class DomValidators{
    constructor(manager){
        this.manager = manager;
        this.register();
    }

    register(){
        this.manager.prototype.hasLinks = this.hasLinks;
    }

    hasLinks(elements){
        return this;
    }
}

module.exports = DomValidators;