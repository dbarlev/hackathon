class PositionValidators {
  constructor(manager) {
    this.manager = manager;
    this.register();
  }

  register() {
    this.manager.prototype.sameAxisX = this.sameAxisX;
    this.manager.prototype.sameAxisY = this.sameAxisY;
  }

  sameAxisX(element) {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      function (node) {
        return node.nodeValue.trim() !== ''
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
      false
    );

    let node;
    let currentPosX = 0;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      var pos = parent.getBoundingClientRect();
      if (currentPosX === 0) {
        currentPosX = pos.x;
      } else if (currentPosX !== pos.x) {
        return new Error();
      }
    }

    return this;
  }

  sameAxisY(elements) {
    return this;
  }
}

module.exports = PositionValidators;
