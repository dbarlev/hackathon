const TAGS_LIST = 'form, input, img, audio, video, iframe, table, select, textarea';

class AutoCompleteValidators{
    constructor(manager){
        this.manager = manager;
        this.register();
    }

    register(){
        this.manager.prototype.valExist = this.valExist;
        // this.manager.prototype.elContainsUnrelatedElements = this.elContainsUnrelatedElements;
    }

    valExist(element){
        const text = window.u1Autocomplete.value;
        var walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, function(node) {
            return (node.nodeValue.trim() !== "") 
                 ? NodeFilter.FILTER_ACCEPT 
                 : NodeFilter.FILTER_REJECT;
          }, false);
        
        while(node = walker.nextNode()) {
        if(!node.nodeValue.toLowerCase().includes(text))
            throw new Error();
        }
    
        return this;
    }

    // elContainsUnrelatedElements(element) {
    //     const result = element.querySelectorAll(TAGS_LIST);
    //     if(result.length > 0) {
    //         throw new Error();
    //     }
    
    //     return this;
    // }

    // isList(element) {
    //     const isElList = isLinksList(element) || isLinksList(element);
    //     if(isElList) {
    //         return this
    //     } else {
    //         throw new Error();
    //     }
    // }

}

module.exports = AutoCompleteValidators;
