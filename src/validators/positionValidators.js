class PositionValidators{
    constructor(manager){
        this.manager = manager;
        this.register();
    }

    register(){
        this.manager.prototype.sameAxisX = this.sameAxisX;
        this.manager.prototype.sameAxisY = this.sameAxisY;
    }

    sameAxisX(elements){
        return this;
    }

    sameAxisY(elements){
        return this;
    }
}

module.exports = PositionValidators;