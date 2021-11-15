class positionValidators{
    constructor(manager){
        this.manager = manager;
        this.register();
    }

    register(){
        this.manager.prototype.sameAxisX = this.sameAxisX;
        this.manager.prototype.sameAxisY = this.sameAxisY;
    }

    sameAxisX(elements){
        return true;
    }

    sameAxisY(elements){
        return true;
    }
}

module.exports = positionValidators;