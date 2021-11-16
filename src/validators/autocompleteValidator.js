const TAGS_LIST =
  'form, input, img, audio, video, iframe, table, select, textarea';

class AutoCompleteValidators {
  constructor(manager) {
    this.manager = manager;
    this.register();
  }

  register() {
    this.manager.prototype.valExist = this.valExist;
    this.manager.prototype.elContainsUnRelatedElements =
      this.elContainsUnRelatedElements;
    this.manager.prototype.isList = this.isList;
    this.manager.prototype.getTreeWalker = this.getTreeWalker;
    this.manager.prototype.isNativeList = this.isNativeLIst;
    this.manager.prototype.isLinksList = this.isLinksList;
  }

  valExist(element) {
    const text = window.u1Autocomplete?.value;
    window.u1Autocomplete = null;
    const walker = this.getTreeWalker(element);
    if (!text) {
      throw new Error();
    }
    let node;
    while ((node = walker.nextNode())) {
      if (!node.nodeValue.toLowerCase().includes(text)) {
        throw new Error();
      }
    }

    return this;
  }

  elContainsUnRelatedElements(element) {
    const result = element.querySelectorAll(TAGS_LIST);
    if (result.length > 0) {
      throw new Error();
    }

    return this;
  }

  isList(element) {
    const isElList = this.isNativeList(element) || this.isLinksList(element);
    if (isElList) {
      return this;
    } else {
      throw new Error();
    }
  }

  isNativeLIst(element) {
    const walker = this.getTreeWalker(element);

    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (parent.nodeName !== 'LI') {
        const liEl = parent.closest('li');
        if (!liEl) {
          return false;
        }
      }
    }

    return true;
  }

  isLinksList(element) {
    const walker = this.getTreeWalker(element);

    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (parent.nodeName !== 'A') {
        const linkEl = parent.closest('A');
        if (!linkEl) {
          return false;
        }
      }
    }

    return true;
  }

  getTreeWalker(element) {
    return document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      function (node) {
        return node.nodeValue.trim() !== ''
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
      false
    );
  }
}

module.exports = AutoCompleteValidators;
