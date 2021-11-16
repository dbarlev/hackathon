class AutoCompleteValidators{
    constructor(manager){
        this.manager = manager;
        this.register();
    }

    register(){
        this.manager.prototype.valExist = this.valExist;
    }

    valExist(element){
        const text = window.u1Autocomplete.value;
        var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        
        while(node = walker.nextNode()) {
        if(node.nodeValue.toLowerCase().includes(text))
            throw new Error;
        }

        return this;
    }
}

module.exports = AutoCompleteValidators;