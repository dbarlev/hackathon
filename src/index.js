const identifiersManger = require('./manager');
const registerIdentifier = require('./identifiers/register');
const registerValidators = require('./validators/register');
const autoCompleteCB = require('./utils/autoCompleteCB');

const config = {
  childList: true,
  subtree: true,
};
class Startup {
  init() {
    const observer = new MutationObserver(autoCompleteCB);
    observer.observe(document, config);
    document.addEventListener('input', (e) => {
      if (e.target.nodeName === 'INPUT') {
        window.u1Autocomplete = e.target;
      }
    });
    this.register();
  }

  register() {
    registerValidators(identifiersManger);
    registerIdentifier(new identifiersManger());
  }
}

new Startup().init();
