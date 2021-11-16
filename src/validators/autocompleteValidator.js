const TAGS_LIST = 'form, input, img, audio, video, iframe, table, select, textarea';

class AutoCompleteValidators{
    constructor(manager){
        this.manager = manager;
        this.register();
    }

    register(){
        this.manager.prototype.valExist = this.valExist;
        this.manager.prototype.elContainsUnrelatedElements = this.elContainsUnrelatedElements;
        this.manager.prototype.isList = this.isList;
    }

    valExist(element){
        const text = window.u1Autocomplete.value;
        const walker = getTreeWalker(element);
    
        while(node = walker.nextNode()) {
            if(!node.nodeValue.toLowerCase().includes('tech')) {
                throw new Error();
            }
        }
    
        return this;
    }

    elContainsUnrelatedElements(element) {
        const result = element.querySelectorAll(TAGS_LIST);
        if(result.length > 0) {
            throw new Error();
        }
    
        return this;
    }

    isList(element) {
        const isElList = isNativeList(element) || isLinksList(element);
        if(isElList) {
            return this;
        } else {
            throw new Error();
        }
    }

    isNativeLIst(element) {
        const walker = getTreeWalker(element);
        
        while(node = walker.nextNode()) {
            const parent = node.parentElement;
            if(parent.nodeName !== 'LI'){
                const liEl = parent.closest('li');
                if(!liEl) {
                    return false;
                }
            }
        }
    
        return true;
    }

    isLinksList(element) {
        const walker = getTreeWalker(element);
        
        while(node = walker.nextNode()) {
            const parent = node.parentElement;
            if(parent.nodeName !== 'A'){
                const linkEl = parent.closest('A');
                if(!linkEl) {
                    return false;
                }
            }
        }
    
        return true;
    }


    // help method
    getTreeWalker(element) {
        return document.createTreeWalker(element, NodeFilter.SHOW_TEXT, function(node) {
            return (node.nodeValue.trim() !== "") 
                 ? NodeFilter.FILTER_ACCEPT 
                 : NodeFilter.FILTER_REJECT;
          }, false);
    }

}

module.exports = AutoCompleteValidators;
